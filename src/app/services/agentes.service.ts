import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgentesService {

  constructor(private http: HttpClient) { }

  getAgentes() {
    return this.http.get('https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true');
  }
}
