import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WeaponComponentComponent } from './weapon-component.component';

describe('WeaponComponentComponent', () => {
  let component: WeaponComponentComponent;
  let fixture: ComponentFixture<WeaponComponentComponent>;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [WeaponComponentComponent],
    });
    fixture = TestBed.createComponent(WeaponComponentComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
    const req = httpMock.expectOne((r) => r.url.includes('valorant-api.com/v1/weapons'));
    req.flush({ data: [] });
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
