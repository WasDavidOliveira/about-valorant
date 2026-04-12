import { Component } from '@angular/core';
import { CardsPlayersServiceService } from 'src/app/services/cards-players-service.service';
import { ActualPageService } from 'src/app/services/actual-page.service';

@Component({
  selector: 'app-card-players-page',
  templateUrl: './card-players-page.component.html',
  styleUrls: ['./card-players-page.component.css']
})
export class CardPlayersPageComponent {

  constructor(private dataService: ActualPageService) { }
  
  
    ngOnInit() {
  
      this.dataService.dadosCompartilhados = 'cards';
      
    }

}
