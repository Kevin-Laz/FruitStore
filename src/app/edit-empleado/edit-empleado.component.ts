import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../Empleado/empleado.model';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css']
})
export class EditEmpleadoComponent implements OnInit {
  constructor(private router:Router, private route:ActivatedRoute, private _empleadoService:EmpleadoService){
  }
  empleado:Empleado;
  id = this.route.snapshot.params['id']
  ngOnInit(): void {
    this.ObtenerEmpleado()
  }
  ObtenerEmpleado(){
    this._empleadoService.getEmpleado(this.id).subscribe(
      (data) => {
        this.empleado = data as Empleado;
        this.textNombre = this.empleado.nombre;
        this.textApellido = this.empleado.apellido;
        this.textCargo = this.empleado.cargo;
        this.textSueldo = this.empleado.sueldo;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  ActualizaEmpleado(){
    this._empleadoService.updateEmpleado(this.id,new Empleado(this.textNombre,this.textApellido,this.textCargo,this.textSueldo)).subscribe(res=>{
      this.router.navigate(['/Contacto']).then(() => {
        //window.location.reload();
      });
    });
  }
  EliminarEmpleado() {
    let listaTemp:Empleado[];
    this._empleadoService.deleteEmpleado(this.id).subscribe(res=>{
      this._empleadoService.getEmpleados().subscribe((res)=>{
        listaTemp = (res as Empleado[]).filter((emp,ind)=>{
          return emp!==null;
        })
        this._empleadoService.setBD(listaTemp).subscribe(()=>{
          this.router.navigate(['/Contacto']).then(()=>{
            //console.log("resuelto");
          })
        })
        //(res as Empleado[]).forEach((empleado,index)=>console.log(empleado))
      })
      /*this.router.navigate(['/Contacto']).then(() => {
        (this._empleadoService.getEmpleados().subscribe((res)=>{
          listaTemp = (res as Empleado[]).filter((emp,ind)=>{
            return ind !== this.id &&emp!==null;
          })
          this._empleadoService.setBD(listaTemp).subscribe(()=>{
            window.location.reload();
          })
          //(res as Empleado[]).forEach((empleado,index)=>console.log(empleado))
        }
        ));
        //window.location.reload();
      });*/
    });
  }
  textNombre:string;
  textApellido:string;
  textCargo:string;
  textSueldo:number;
}
