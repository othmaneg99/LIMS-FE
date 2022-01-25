import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public host:String = "http://localhost:8081"

  constructor(private http:HttpClient) { }

  public getResource(url:any) {
return this.http.get(this.host+url)
  }
}
