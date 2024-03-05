import { Component } from '@angular/core';
import { Empleado } from '../Empleado/empleado.model';
import { EmpleadoService } from '../empleado.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  constructor(private _empleadoService:EmpleadoService){
    this._empleadoService.getEmpleados().subscribe(res=>{
      this.listaEmpleados = res;
      //console.log(res)
    });
  }
  listaEmpleados:Empleado[]
  public setListaEmpleado(lista:Empleado[]){
    this.listaEmpleados = lista;
  }
  addEmpleado(){
    this._empleadoService.addEmpleadoService(this.textNombre,this.textApellido,this.textCargo,this.textSalario,this.listaEmpleados.length).pipe(
      switchMap(()=>this._empleadoService.getEmpleados())
    ).subscribe(res=>{
      this.listaEmpleados = res;
      //console.log(res);
      this.textNombre = "";
      this.textApellido = "";
      this.textCargo = "";
      this.textSalario = 0;
    })
    //this.listaEmpleados.push(new Empleado(nombre,apellido,cargo,suledo));


  }
  textNombre:string = "";
  textApellido:string = "";
  textCargo:string = "";
  textSalario:number = 0;
}
