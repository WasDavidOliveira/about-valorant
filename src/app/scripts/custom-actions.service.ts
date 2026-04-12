import { Renderer2 } from '@angular/core';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomActionsService {


  clickButton(button : any):void{

    let uuid = button.value;
    console.log(uuid);

   
  }

}
