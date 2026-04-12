import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPlayersServiceComponent } from './cards-players-service.component';

describe('CardsPlayersServiceComponent', () => {
  let component: CardsPlayersServiceComponent;
  let fixture: ComponentFixture<CardsPlayersServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsPlayersServiceComponent]
    });
    fixture = TestBed.createComponent(CardsPlayersServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
