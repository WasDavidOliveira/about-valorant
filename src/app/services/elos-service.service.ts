import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompetitiveTiersApiDto } from 'src/app/models/elo-sections.model';

@Injectable({
  providedIn: 'root'
})
export class ElosServiceService {

  constructor(protected http: HttpClient) { }

  getElos(): Observable<CompetitiveTiersApiDto> {
    return this.http.get<CompetitiveTiersApiDto>('https://valorant-api.com/v1/competitivetiers');
  }

}
