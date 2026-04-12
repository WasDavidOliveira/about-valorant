import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AgentesSpecificService } from 'src/app/services/agentes-specific.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agente-specific',
  templateUrl: './agente-specific.component.html',
  styleUrls: ['./agente-specific.component.css']
})
export class AgenteSpecificComponent {


  constructor(private route: ActivatedRoute, private AgentesSpecificService: AgentesSpecificService, private router: Router) {
    // Você pode acessar os parâmetros da URL aqui.
  }


  agente: any = {};

  ngOnInit() {


    this.route.params.subscribe(params => {

      
      let id = params['id']; 
      console.log('ID da URL:https://valorant-api.com/v1/agents/' + id + '?language=pt-BR');

      this.AgentesSpecificService.getAgenteInfo(id).subscribe((response: any) => {

        this.agente = response.data;

        console.log(this.agente);
        
      
      }, (error => {
        this.router.navigate(['/']); // Redireciona o usuário para a página inicial
      }));

    });
  }

}
