import { Component, OnInit } from '@angular/core';

import { ElosServiceService } from 'src/app/services/elos-service.service';
import {
  CompetitiveTiersApiDto,
  EloSectionViewModel,
  buildEloSections,
} from 'src/app/models/elo-sections.model';

@Component({
  selector: 'app-elos-component',
  templateUrl: './elos-component.component.html',
  styleUrls: ['./elos-component.component.css']
})
export class ElosComponentComponent implements OnInit {

  protected sections: EloSectionViewModel[] = [];
  protected loading = true;
  protected loadFailed = false;
  protected readonly skeletonSlots = [0, 1, 2, 3, 4, 5];

  constructor(protected elosService: ElosServiceService) {}

  ngOnInit(): void {
    this.elosService.getElos().subscribe({
      next: (res: CompetitiveTiersApiDto) => {
        const tables = res.data;
        if (tables.length === 0) {
          this.loading = false;
          return;
        }
        const latest = tables[tables.length - 1];
        this.sections = buildEloSections(latest.tiers);
        this.loading = false;
      },
      error: () => {
        this.loadFailed = true;
        this.loading = false;
      },
    });
  }

  protected revealDelay(sectionIndex: number, tierIndex: number): number {
    return sectionIndex * 100 + tierIndex * 45;
  }
}
