import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElosPageComponent } from './elos-page.component';

describe('ElosPageComponent', () => {
  let component: ElosPageComponent;
  let fixture: ComponentFixture<ElosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElosPageComponent]
    });
    fixture = TestBed.createComponent(ElosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
