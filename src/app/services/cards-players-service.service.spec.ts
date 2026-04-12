import { TestBed } from '@angular/core/testing';

import { CardsPlayersServiceService } from './cards-players-service.service';

describe('CardsPlayersServiceService', () => {
  let service: CardsPlayersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsPlayersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
