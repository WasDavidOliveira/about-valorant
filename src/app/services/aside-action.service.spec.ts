import { TestBed } from '@angular/core/testing';

import { AsideActionService } from './aside-action.service';

describe('AsideActionService', () => {
  let service: AsideActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsideActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
