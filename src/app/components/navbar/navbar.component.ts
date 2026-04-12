import { Component, HostListener, OnInit } from '@angular/core';
import { AsideActionService } from 'src/app/services/aside-action.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isScrolled = false;

  constructor(private dataService: AsideActionService) {}

  ngOnInit(): void {
    this.dataService.atualizarValor(false);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 10;
  }

  alterarValor(): void {
    const novoValor = !this.dataService.valorCompartilhado.getValue();
    this.dataService.atualizarValor(novoValor);
  }
}
