import { Component, OnInit } from '@angular/core';

import { ElosServiceService } from 'src/app/services/elos-service.service';


@Component({
  selector: 'app-elos-component',
  templateUrl: './elos-component.component.html',
  styleUrls: ['./elos-component.component.css']
})
export class ElosComponentComponent {

  constructor(private elosService: ElosServiceService){

  }

  elos: any;

  ngOnInit() {

    this.elosService.getElos().subscribe((Response :any) => {
      this.elos = Response.data;

      let getLast = this.elos.length - 1;

      this.elos = this.elos[getLast];

      console.log(this.elos);

    })
    
  }
 

}
