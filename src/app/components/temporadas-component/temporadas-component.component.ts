import { Component, OnInit } from '@angular/core';

import { TemporadasServicesService } from 'src/app/services/temporadas-services.service';
import {
  SeasonsApiResponseDto,
  TemporadaSectionViewModel,
  buildTemporadaSections,
} from 'src/app/models/valorant-season.model';

@Component({
  selector: 'app-temporadas-component',
  templateUrl: './temporadas-component.component.html',
  styleUrls: ['./temporadas-component.component.css'],
})
export class TemporadasComponentComponent implements OnInit {

  protected sections: TemporadaSectionViewModel[] = [];
  protected loading = true;
  protected loadFailed = false;
  protected readonly skeletonSlots = [0, 1, 2, 3, 4, 5];

  constructor(protected temporadasService: TemporadasServicesService) {}

  ngOnInit(): void {
    this.temporadasService.getTemporadas().subscribe({
      next: (res: SeasonsApiResponseDto) => {
        this.sections = buildTemporadaSections(res.data);
        this.loading = false;
      },
      error: () => {
        this.loadFailed = true;
        this.loading = false;
      },
    });
  }

  protected revealDelay(sectionIndex: number, cardIndex: number): number {
    return sectionIndex * 80 + cardIndex * 40;
  }
}
