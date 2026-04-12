import { Component, OnInit } from '@angular/core';
import { ActualPageService } from 'src/app/services/actual-page.service';


@Component({
  selector: 'app-weapons-page',
  templateUrl: './weapons-page.component.html',
  styleUrls: ['./weapons-page.component.css']
})
export class WeaponsPageComponent {

  constructor(private dataService: ActualPageService) { }

  ngOnInit() {

    this.dataService.dadosCompartilhados = 'armas';
    
  }

}
