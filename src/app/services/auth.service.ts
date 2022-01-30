import { Injectable } from '@angular/core';
import ApiService from "src/app/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: ApiService) { }

  signIn(isGoogleSignIn: boolean, data: any) {
    return this.api.post('signIn', {isGoogleSignIn, data}).toPromise();
  }

}
