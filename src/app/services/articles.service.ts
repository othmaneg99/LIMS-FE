import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import ApiService from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public host:String = "http://localhost:8081"

  constructor(private api:ApiService) { }

  public getResource(url:string) {
    return this.api.get(url)
  }
  public deleteResource(url:string) {
    return this.api.delete(url)
  }
  public saveResource(url:string,data:any){
    return this.api.post(url,data)

  }
}
