import { TestBed } from '@angular/core/testing';

import { AgentesSpecificService } from './agentes-specific.service';

describe('AgentesSpecificService', () => {
  let service: AgentesSpecificService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentesSpecificService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
