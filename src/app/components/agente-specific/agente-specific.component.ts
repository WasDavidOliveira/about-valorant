import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AgentesSpecificService } from 'src/app/services/agentes-specific.service';

@Component({
  selector: 'app-agente-specific',
  templateUrl: './agente-specific.component.html',
  styleUrls: ['./agente-specific.component.css']
})
export class AgenteSpecificComponent implements OnInit {

  agente: any = {};

  constructor(
    protected route: ActivatedRoute,
    protected agentesSpecificService: AgentesSpecificService,
    protected router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.agentesSpecificService.getAgenteInfo(id).subscribe({
        next: (response: any) => {
          this.agente = response.data;
        },
        error: () => {
          this.router.navigate(['/']);
        },
      });
    });
  }

}
