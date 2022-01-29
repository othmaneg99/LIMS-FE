import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export default class ApiService {

  private static baseURL: string = 'http://localhost:8081/';

  constructor(private httpClient: HttpClient) { }

  post(path: string, payload: any) {
    return this.httpClient.post(ApiService.baseURL + path, payload);
  }
}
