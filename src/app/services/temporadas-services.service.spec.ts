import { TestBed } from '@angular/core/testing';

import { TemporadasServicesService } from './temporadas-services.service';

describe('TemporadasServicesService', () => {
  let service: TemporadasServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemporadasServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
