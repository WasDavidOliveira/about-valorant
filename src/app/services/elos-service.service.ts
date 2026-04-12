import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ElosServiceService {

  constructor(private http: HttpClient) { }

  getElos() {
    return this.http.get('https://valorant-api.com/v1/competitivetiers');
  }
  
}
