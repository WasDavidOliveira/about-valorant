import { TestBed } from '@angular/core/testing';

import { ElosServiceService } from './elos-service.service';

describe('ElosServiceService', () => {
  let service: ElosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
