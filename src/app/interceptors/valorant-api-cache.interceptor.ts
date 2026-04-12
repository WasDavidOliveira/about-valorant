import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

interface ValorantCacheEntry {
  body: unknown;
  status: number;
  expiresAt: number;
}

const VALORANT_API_HOST = 'valorant-api.com';
const CACHE_TTL_MS = 60 * 60 * 1000;

@Injectable()
export class ValorantApiCacheInterceptor implements HttpInterceptor {
  protected readonly store = new Map<string, ValorantCacheEntry>();

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (req.method !== 'GET') {
      return next.handle(req);
    }
    if (!req.url.includes(VALORANT_API_HOST)) {
      return next.handle(req);
    }
    const key = req.urlWithParams;
    const hit = this.store.get(key);
    const now = Date.now();
    if (hit && hit.expiresAt > now) {
      return of(
        new HttpResponse({
          body: hit.body,
          status: hit.status,
          url: req.url,
        })
      );
    }
    return next.handle(req).pipe(
      tap((event) => {
        if (!(event instanceof HttpResponse)) {
          return;
        }
        if (event.status < 200 || event.status >= 300) {
          return;
        }
        this.store.set(key, {
          body: event.body,
          status: event.status,
          expiresAt: Date.now() + CACHE_TTL_MS,
        });
      })
    );
  }
}
