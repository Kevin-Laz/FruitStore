import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit  {
  title = 'formulario';
  constructor(){
  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyA6X5zT52CCCWvNPCtv4jKWFux6PnFQZSU",
      authDomain: "empleadosa-56f4c.firebaseapp.com",
    });
  }


  ngAfterViewInit():void{

  }


}
