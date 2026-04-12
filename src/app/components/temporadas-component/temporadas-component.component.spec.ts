import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporadasComponentComponent } from './temporadas-component.component';

describe('TemporadasComponentComponent', () => {
  let component: TemporadasComponentComponent;
  let fixture: ComponentFixture<TemporadasComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemporadasComponentComponent]
    });
    fixture = TestBed.createComponent(TemporadasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
