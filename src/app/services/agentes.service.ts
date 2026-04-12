import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ValorantAgentsApiDto } from 'src/app/models/agent-role-sections.model';

@Injectable({
  providedIn: 'root'
})
export class AgentesService {

  constructor(protected http: HttpClient) { }

  getAgentes(): Observable<ValorantAgentsApiDto> {
    return this.http.get<ValorantAgentsApiDto>('https://valorant-api.com/v1/agents?language=en-US&isPlayableCharacter=true');
  }
}
