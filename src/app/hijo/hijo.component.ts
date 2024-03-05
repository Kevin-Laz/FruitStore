import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../Empleado/empleado.model';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() lista:Empleado;
  @Input() id:number;
  listaCaracteristicas = [''];
  addCaracteristica(mensaje){
    this.listaCaracteristicas.push(mensaje)
  }
}
