import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElosComponentComponent } from './elos-component.component';

describe('ElosComponentComponent', () => {
  let component: ElosComponentComponent;
  let fixture: ComponentFixture<ElosComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElosComponentComponent]
    });
    fixture = TestBed.createComponent(ElosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
