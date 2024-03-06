import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { InputButtonComponent } from './input-button/input-button.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TiendaComponent } from './tienda/tienda.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { EditEmpleadoComponent } from './edit-empleado/edit-empleado.component';
import { LoginComponent } from './login/login.component';
import { EmpleadoService } from './empleado.service';
import { LoginService } from './login.service';
import { LoadApiService } from './load-api.service';

const appRoutes: Routes =[
  {path:'',component: InicioComponent},
  {path:'Nosotros',component: NosotrosComponent},
  {path:'Tienda',component: TiendaComponent},
  {path:'Contacto',component: ContactoComponent},
  {path:'EditEmpleado/:id', component:EditEmpleadoComponent},
  {path:'Login',component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    InputButtonComponent,
    NosotrosComponent,
    ContactoComponent,
    TiendaComponent,
    InicioComponent,
    EditEmpleadoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [EmpleadoService,LoginService, LoadApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
