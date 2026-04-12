import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { CardsPlayersServiceService } from 'src/app/services/cards-players-service.service';

@Component({
  selector: 'app-cards-players-service',
  templateUrl: './cards-players-service.component.html',
  styleUrls: ['./cards-players-service.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(24px)' }),
            stagger(30, [
              animate(
                '400ms cubic-bezier(0.16, 1, 0.3, 1)',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class CardsPlayersServiceComponent implements OnInit {

  cards: any[] = [];

  constructor(private cardsService: CardsPlayersServiceService) {}

  ngOnInit(): void {
    this.cardsService.getCards().subscribe((Response: any) => {
      this.cards = Response.data.filter(
        (card: any) => card.largeArt != null && card.largeArt !== ''
      );
    });
  }
}
