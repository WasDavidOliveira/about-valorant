import { Component } from '@angular/core';

import { ActualPageService } from 'src/app/services/actual-page.service';


@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent {

  constructor(private dataService: ActualPageService) { }


  ngOnInit() {

    this.dataService.dadosCompartilhados = 'mapas';
    
  }
}
