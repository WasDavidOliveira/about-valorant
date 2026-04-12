import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlayersPageComponent } from './card-players-page.component';

describe('CardPlayersPageComponent', () => {
  let component: CardPlayersPageComponent;
  let fixture: ComponentFixture<CardPlayersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPlayersPageComponent]
    });
    fixture = TestBed.createComponent(CardPlayersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
