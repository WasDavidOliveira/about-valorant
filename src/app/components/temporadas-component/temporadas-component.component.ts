import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { TemporadasServicesService } from 'src/app/services/temporadas-services.service';

@Component({
  selector: 'app-temporadas-component',
  templateUrl: './temporadas-component.component.html',
  styleUrls: ['./temporadas-component.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(24px)' }),
            stagger(60, [
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
export class TemporadasComponentComponent implements OnInit {

  temporadas: any[] = [];

  constructor(private temporadasService: TemporadasServicesService) {}

  ngOnInit(): void {
    this.getTemporadas();
  }

  getTemporadas(): void {
    this.temporadasService.getTemporadas().subscribe((Response: any) => {
      this.temporadas = Response.data;
    });
  }
}
