import { Component , OnInit} from '@angular/core';

import { ActualPageService } from 'src/app/services/actual-page.service';


@Component({
  selector: 'app-elos-page',
  templateUrl: './elos-page.component.html',
  styleUrls: ['./elos-page.component.css']
})
export class ElosPageComponent {

  constructor(private dataService: ActualPageService) { }


  ngOnInit() {

    this.dataService.dadosCompartilhados = 'elos';
    
  }

}
