import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponComponentComponent } from './weapon-component.component';

describe('WeaponComponentComponent', () => {
  let component: WeaponComponentComponent;
  let fixture: ComponentFixture<WeaponComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeaponComponentComponent]
    });
    fixture = TestBed.createComponent(WeaponComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
