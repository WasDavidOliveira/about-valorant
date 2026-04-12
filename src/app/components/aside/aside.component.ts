import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ActualPageService } from 'src/app/services/actual-page.service';
import { AsideActionService } from 'src/app/services/aside-action.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  animations: [
    trigger('slideIn', [
      state('hidden', style({ transform: 'translateX(-100%)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', [
        animate('300ms cubic-bezier(0.16, 1, 0.3, 1)'),
      ]),
      transition('visible => hidden', [
        animate('200ms cubic-bezier(0.4, 0, 1, 1)'),
      ]),
    ]),
  ],
})
export class AsideComponent implements OnInit {

  page: any = '';
  active: any = false;

  constructor(
    private actualPage: ActualPageService,
    private dataService: AsideActionService
  ) {}

  ngOnInit(): void {
    this.page = this.actualPage.dadosCompartilhados;

    this.dataService.valorCompartilhado$.subscribe((valor: any) => {
      this.active = valor;
    });
  }

  get slideState(): string {
    return this.active ? 'visible' : 'hidden';
  }

  fecharMenuMobile(): void {
    this.dataService.atualizarValor(false);
  }
}
