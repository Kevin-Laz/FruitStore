import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) {

  }
  token:String;
  login(email:string, pass:string){
    firebase.auth().signInWithEmailAndPassword(email,pass).then((res)=>{
      firebase.auth().currentUser?.getIdToken().then(token =>{
        this.token = token;
        this.router.navigate([''])
      })
    })
  }

  getToken(){
    return this.token;
  }
  tokenIsEmpty(){
    return this.token?true:false;
  }
}
