import { Injectable } from '@angular/core';
import { Empleado } from './Empleado/empleado.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private _http:HttpClient) {

  }
  setBD(lista:Empleado[]){
    return this._http.put('https://empleadosa-56f4c-default-rtdb.firebaseio.com/datos.json',lista);
  }
  addEmpleadoService(nombre:string,apellido:string,cargo:string,suledo:number,id:number){
    return this._http.put(`https://empleadosa-56f4c-default-rtdb.firebaseio.com/datos/${id}.json`,new Empleado(nombre,apellido,cargo,suledo))
  }
  getEmpleados():Observable<any>{
    return this._http.get('https://empleadosa-56f4c-default-rtdb.firebaseio.com/datos.json');
  }
  getEmpleado(id:number){
    //return this.listaEmpleados[id];
    return this._http.get(`https://empleadosa-56f4c-default-rtdb.firebaseio.com/datos/${id}.json`);
  }
  updateEmpleado(id:number, empleado:Empleado){
    //this.listaEmpleados[id] = empleado;
    return this._http.put(`https://empleadosa-56f4c-default-rtdb.firebaseio.com/datos/${id}.json`,empleado)
  }
  deleteEmpleado(id:number){
    return this._http.delete(`https://empleadosa-56f4c-default-rtdb.firebaseio.com/datos/${id}.json`);
  }
}
