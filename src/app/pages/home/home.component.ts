import { Component, OnInit } from '@angular/core';
import { ActualPageService } from 'src/app/services/actual-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private dataService: ActualPageService) { }

  ngOnInit() {

    this.dataService.dadosCompartilhados = 'home';
    
  }
    valorParaAside: boolean = false;
 
}
