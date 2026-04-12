import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlayerCardsApiDto } from 'src/app/models/playercard.model';

@Injectable({
  providedIn: 'root'
})
export class CardsPlayersServiceService {

  constructor(protected http: HttpClient) { }

  getCards(): Observable<PlayerCardsApiDto> {
    return this.http.get<PlayerCardsApiDto>(
      'https://valorant-api.com/v1/playercards?language=pt-BR'
    );
  }

}
