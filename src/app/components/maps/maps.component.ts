import { Component, OnInit } from '@angular/core';
import { MapsService } from 'src/app/services/maps.service';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {

  constructor(private MapsService: MapsService){

  }

  mapas: any = [];

  ngOnInit(): void {
    // Código a ser executado quando a página é carregada
    this.getMapas();
  }


  getMapas(){
    this.MapsService.getMapas().subscribe((response:any) => {
      this.mapas = response.data;

      console.log(this.mapas)
    }, (error) => {

      console.log(error);
    })
  }

}
