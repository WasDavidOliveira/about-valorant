import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeasonsApiResponseDto } from 'src/app/models/valorant-season.model';

@Injectable({
  providedIn: 'root'
})
export class TemporadasServicesService {

  constructor(protected http: HttpClient) { }

  getTemporadas(): Observable<SeasonsApiResponseDto> {
    return this.http.get<SeasonsApiResponseDto>(
      'https://valorant-api.com/v1/seasons?language=pt-BR&isPlayableCharacter=true'
    );
  }

}
