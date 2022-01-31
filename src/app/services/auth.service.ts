import {Injectable} from '@angular/core';
import ApiService from "src/app/services/api.service";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private api: ApiService) {
  }

  signIn(data: signInRequest) {
    return this.api.post('/auth/signin', data).toPromise();
  }
}

type signInRequest = {
  googleSignIn: boolean;
  email?: string;
  password?: string;
  googleAuthData?: {
    firstName: string;
    lastName: string;
    email: string;
    idToken: string;
    accessToken: string;
    expiresAt: number;
    expiresIn: number;
    issuedAt: number;
  };
}
