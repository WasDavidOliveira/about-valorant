import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { timer } from 'rxjs';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'aboutvalorant';
  protected bootstrapDismissed = false;

  constructor(protected router: Router) {}

  ngOnInit(): void {
    const afterPaint = (): void => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.dismissBootstrapLoader();
        });
      });
    };
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        take(1),
      )
      .subscribe(() => afterPaint());
    timer(0)
      .pipe(take(1))
      .subscribe(() => {
        if (!this.router.navigated) {
          return;
        }
        afterPaint();
      });
    setTimeout(() => this.dismissBootstrapLoader(), 8000);
  }

  protected dismissBootstrapLoader(): void {
    if (this.bootstrapDismissed) {
      return;
    }
    this.bootstrapDismissed = true;
    const el = document.getElementById('av-bootstrap-loader');
    document.body.classList.remove('av-bootstrap-loading');
    if (!el) {
      return;
    }
    const finish = (): void => {
      el.remove();
    };
    const onEnd = (ev: TransitionEvent): void => {
      if (ev.propertyName !== 'opacity') {
        return;
      }
      el.removeEventListener('transitionend', onEnd);
      finish();
    };
    el.addEventListener('transitionend', onEnd);
    el.classList.add('av-bl-hide');
    setTimeout(finish, 700);
  }
}
