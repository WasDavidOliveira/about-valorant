import { Component } from '@angular/core';
import { ActualPageService } from 'src/app/services/actual-page.service';


@Component({
  selector: 'app-temporadas-page',
  templateUrl: './temporadas-page.component.html',
  styleUrls: ['./temporadas-page.component.css']
})
export class TemporadasPageComponent {

  constructor(private dataService: ActualPageService) { }


  ngOnInit() {

    this.dataService.dadosCompartilhados = 'temporadas';
    
  }

}
