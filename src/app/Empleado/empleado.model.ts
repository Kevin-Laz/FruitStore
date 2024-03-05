export class Empleado{

  constructor(nombre:string, apellido:string, cargo:string, sueldo:number){
    this.nombre = nombre;
    this.apellido = apellido;
    this.cargo = cargo;
    this.sueldo = sueldo;
  }

  nombre: string = "";
  apellido: string = "";
  cargo:string = "";
  sueldo:number = 0;
}
