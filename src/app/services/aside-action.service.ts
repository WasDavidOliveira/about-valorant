import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsideActionService {

  public valorCompartilhado = new BehaviorSubject<boolean>(false);
  valorCompartilhado$ = this.valorCompartilhado.asObservable();

  atualizarValor(novoValor: boolean) {
    this.valorCompartilhado.next(novoValor);
  }

}
