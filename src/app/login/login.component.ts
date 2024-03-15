import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _login:LoginService){

  }
  login(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this._login.login(email,password);
  }

}
