import { AfterViewInit, Component,OnInit } from '@angular/core';
import { LoadApiService } from '../load-api.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})



export class TiendaComponent implements OnInit,AfterViewInit {
  constructor(private loadApi:LoadApiService){
  }
  public urlPokemon:any = [];
  public listPokemon:any = [];
  public imgPokemon:object[] = [];
  ngOnInit():void{
    /*this.loadApi.get("https://pokeapi.co/api/v2/pokemon").then(res => {
      this.urlPokemon = res.results
      for(let i of this.urlPokemon){
        this.loadApi.get(i.url).then(res =>this.imgPokemon.push({url:res.sprites, name:mayusculaL(i.name)}));
      }
      //console.log(this.imgPokemon)
    });*/
    this.loadApi.getHttp("https://pokeapi.co/api/v2/pokemon").subscribe(res=>{
      this.urlPokemon = res.results;
      for(let i of this.urlPokemon){
        this.loadApi.getHttp(i.url).subscribe(res =>this.imgPokemon.push({url:res.sprites, name:mayusculaL(i.name)}));
      }
    })
    function mayusculaL(cadena) {
      return cadena.charAt(0).toUpperCase() + cadena.slice(1);
    }

  }
  ngAfterViewInit(): void {
    
  }
}


