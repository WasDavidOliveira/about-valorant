import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsPlayersServiceService {

  constructor(private http: HttpClient) { }

  getCards() {
    return this.http.get('https://valorant-api.com/v1/playercards?language=pt-BR');
  }

}
