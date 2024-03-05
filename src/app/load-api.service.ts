import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadApiService {

  constructor(private _http:HttpClient) { }

  public async get(url:string){
    let res = await fetch(url);
    return res.json();
  }
  public getHttp(url:string):Observable<any>{
    return this._http.get(url);
  }
}
