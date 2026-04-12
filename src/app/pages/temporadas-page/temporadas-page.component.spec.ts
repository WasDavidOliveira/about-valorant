import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporadasPageComponent } from './temporadas-page.component';

describe('TemporadasPageComponent', () => {
  let component: TemporadasPageComponent;
  let fixture: ComponentFixture<TemporadasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemporadasPageComponent]
    });
    fixture = TestBed.createComponent(TemporadasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
