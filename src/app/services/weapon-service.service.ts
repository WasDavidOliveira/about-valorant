import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ValorantWeaponsApiDto } from 'src/app/models/valorant-weapon.model';

@Injectable({
  providedIn: 'root'
})
export class WeaponServiceService {

  constructor(protected http: HttpClient) { }

  getArmas(): Observable<ValorantWeaponsApiDto> {
    return this.http.get<ValorantWeaponsApiDto>('https://valorant-api.com/v1/weapons');
  }
}
