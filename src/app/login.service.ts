import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router, private _cookie:CookieService) {

  }
  token:String;
  login(email:string, pass:string){
    firebase.auth().signInWithEmailAndPassword(email,pass).then((res)=>{
      firebase.auth().currentUser?.getIdToken().then(token =>{
        this.token = token;
        this._cookie.set('Token',token)
        //console.log(token);
        window.location.reload();
      })
    })
  }
  logOut(){
    firebase.auth().signOut().then(()=>{
      this._cookie.set('Token',"");
      window.location.reload();
    })
  }
  getToken(){
    return this._cookie.get('Token');
  }
  tokenIsEmpty(){
    return this._cookie.get('Token')?true:false;
  }
}
