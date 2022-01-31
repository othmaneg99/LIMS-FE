import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export default class ApiService {

  private static baseURL: string = 'http://localhost:8081';

  constructor(private httpClient: HttpClient, private router: Router) { }

  private static getHeaders = () => {
    let user: any = sessionStorage.getItem('user');
    if (user) user = JSON.parse(atob(user));
    return {
      'Authorization': user?.accessToken || '',
      'Content-Type': 'application/json',
    }
  }

  get(path: string, params: any= {}) {
    return this.httpClient.get(ApiService.baseURL + path, {
      headers: ApiService.getHeaders(),
      params
    });
  }

  post(path: string, body: any) {
    return this.httpClient.post(ApiService.baseURL + path, body, {
      headers: ApiService.getHeaders(),
    });
  }

  delete(path: string, body?: any) {
    return this.httpClient.delete(ApiService.baseURL + path, {
      headers: ApiService.getHeaders(),
    });
  }
}
