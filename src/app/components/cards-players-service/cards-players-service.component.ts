import { Component, OnInit } from '@angular/core';

import { CardsPlayersServiceService } from 'src/app/services/cards-players-service.service';
import { PlayerCardDto, PlayerCardsApiDto } from 'src/app/models/playercard.model';

@Component({
  selector: 'app-cards-players-service',
  templateUrl: './cards-players-service.component.html',
})
export class CardsPlayersServiceComponent implements OnInit {

  protected allCards: PlayerCardDto[] = [];
  protected searchQuery = '';
  protected currentPage = 1;
  protected loading = true;
  protected loadFailed = false;
  protected readonly skeletonSlots = [0, 1, 2, 3, 4, 5, 6, 7];
  protected readonly pageSize = 20;

  constructor(protected cardsService: CardsPlayersServiceService) {}

  ngOnInit(): void {
    this.cardsService.getCards().subscribe({
      next: (res: PlayerCardsApiDto) => {
        this.allCards = res.data.filter(
          (c) => c.largeArt !== null && c.largeArt !== ''
        );
        this.loading = false;
      },
      error: () => {
        this.loadFailed = true;
        this.loading = false;
      },
    });
  }

  get filteredCards(): PlayerCardDto[] {
    const q = this.searchQuery.trim().toLowerCase();
    if (q.length === 0) {
      return this.allCards;
    }
    return this.allCards.filter((c) => c.displayName.toLowerCase().includes(q));
  }

  get totalPages(): number {
    const n = this.filteredCards.length;
    if (n === 0) {
      return 0;
    }
    return Math.ceil(n / this.pageSize);
  }

  get effectiveCurrentPage(): number {
    const tp = this.totalPages;
    if (tp === 0) {
      return 1;
    }
    if (this.currentPage > tp) {
      return tp;
    }
    if (this.currentPage < 1) {
      return 1;
    }
    return this.currentPage;
  }

  get pagedCards(): PlayerCardDto[] {
    const list = this.filteredCards;
    if (list.length === 0) {
      return [];
    }
    const page = this.effectiveCurrentPage;
    const start = (page - 1) * this.pageSize;
    return list.slice(start, start + this.pageSize);
  }

  get rangeStart(): number {
    if (this.filteredCards.length === 0) {
      return 0;
    }
    return (this.effectiveCurrentPage - 1) * this.pageSize + 1;
  }

  get rangeEnd(): number {
    const n = this.filteredCards.length;
    if (n === 0) {
      return 0;
    }
    const end = this.effectiveCurrentPage * this.pageSize;
    if (end > n) {
      return n;
    }
    return end;
  }

  protected onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value;
    this.currentPage = 1;
  }

  protected clearSearch(): void {
    this.searchQuery = '';
    this.currentPage = 1;
  }

  protected goPrev(): void {
    if (this.effectiveCurrentPage <= 1) {
      return;
    }
    this.currentPage = this.effectiveCurrentPage - 1;
  }

  protected goNext(): void {
    if (this.effectiveCurrentPage >= this.totalPages) {
      return;
    }
    this.currentPage = this.effectiveCurrentPage + 1;
  }

  protected revealDelayFor(index: number): number {
    const step = 24;
    const cap = 400;
    if (index * step > cap) {
      return cap;
    }
    return index * step;
  }
}
