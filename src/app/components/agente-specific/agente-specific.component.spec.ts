import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenteSpecificComponent } from './agente-specific.component';

describe('AgenteSpecificComponent', () => {
  let component: AgenteSpecificComponent;
  let fixture: ComponentFixture<AgenteSpecificComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgenteSpecificComponent]
    });
    fixture = TestBed.createComponent(AgenteSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
