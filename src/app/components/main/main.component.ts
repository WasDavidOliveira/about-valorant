import { Component, OnInit } from '@angular/core';

import { AgentesService } from 'src/app/services/agentes.service';
import {
  AgentRoleSectionViewModel,
  ValorantAgentsApiDto,
  buildAgentRoleSections,
} from 'src/app/models/agent-role-sections.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  protected sections: AgentRoleSectionViewModel[] = [];
  protected loading = true;
  protected loadFailed = false;
  protected readonly skeletonSlots = [0, 1, 2, 3, 4, 5, 6, 7];

  constructor(protected agentesService: AgentesService) {}

  ngOnInit(): void {
    this.agentesService.getAgentes().subscribe({
      next: (res: ValorantAgentsApiDto) => {
        this.sections = buildAgentRoleSections(res.data);
        this.loading = false;
      },
      error: () => {
        this.loadFailed = true;
        this.loading = false;
      },
    });
  }

  protected revealDelay(sectionIndex: number, agentIndex: number): number {
    return sectionIndex * 80 + agentIndex * 40;
  }
}
