import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { AgentesService } from 'src/app/services/agentes.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(24px)' }),
            stagger(50, [
              animate(
                '350ms cubic-bezier(0.16, 1, 0.3, 1)',
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
export class MainComponent implements OnInit {

  agentesData: any[] = [];

  constructor(private AgentesService: AgentesService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.AgentesService.getAgentes().subscribe((response: any) => {
      this.agentesData = response.data;
    });
  }
}
