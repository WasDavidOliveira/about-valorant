import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TemporadasServicesService {

  constructor(private http: HttpClient) { }

  getTemporadas() {
    return this.http.get('https://valorant-api.com/v1/seasons?language=pt-BR&isPlayableCharacter=true');
  }

}
