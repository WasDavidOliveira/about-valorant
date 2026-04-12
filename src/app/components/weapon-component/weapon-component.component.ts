import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';
import { WeaponServiceService } from 'src/app/services/weapon-service.service';
import { CustomActionsService } from 'src/app/scripts/custom-actions.service';

@Component({
  selector: 'app-weapon-component',
  templateUrl: './weapon-component.component.html',
  styleUrls: ['./weapon-component.component.css'],
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95) translateY(10px)' }),
        animate(
          '250ms cubic-bezier(0.16, 1, 0.3, 1)',
          style({ opacity: 1, transform: 'scale(1) translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '150ms ease-in',
          style({ opacity: 0, transform: 'scale(0.95) translateY(10px)' })
        ),
      ]),
    ]),
  ],
})
export class WeaponComponentComponent implements OnInit {

  armas: any[] = [];
  divAtiva: string = '';

  constructor(
    private weaponService: WeaponServiceService,
    private customActionsService: CustomActionsService
  ) {}

  ngOnInit(): void {
    this.getArmas();
  }

  getArmas(): void {
    this.weaponService.getArmas().subscribe((response: any) => {
      this.armas = response.data.filter((a: any) => a.shopData);
    });
  }

  showDiv(uuid: string): void {
    this.divAtiva = this.divAtiva === uuid ? '' : uuid;
  }

  executeCustomAction(event: MouseEvent): void {
    this.customActionsService.clickButton(event.currentTarget);
  }
}
