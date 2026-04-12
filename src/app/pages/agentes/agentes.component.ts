import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AgentesSpecificService } from 'src/app/services/agentes-specific.service';

import { ActualPageService } from 'src/app/services/actual-page.service';



@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.css']
})
export class AgentesComponent {

  constructor(private dataService: ActualPageService) { }


  ngOnInit() {

    this.dataService.dadosCompartilhados = 'agente';
    
  }


 

}
