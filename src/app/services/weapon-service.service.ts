import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeaponServiceService {

  constructor(private http: HttpClient) { }

  getArmas() {
    return this.http.get('https://valorant-api.com/v1/weapons');
  }
}
