import { TestBed } from '@angular/core/testing';

import { WeaponServiceService } from './weapon-service.service';

describe('WeaponServiceService', () => {
  let service: WeaponServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
