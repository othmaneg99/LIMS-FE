import {Injectable} from '@angular/core';
import ApiService from "src/app/services/api.service";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private api: ApiService) {
  }

  async signIn(data: signInRequest, onSuccess: (res: any) => void, onError: (err: any) => void) {
    try {
      const res = await this.api.post('/auth/signin', data).toPromise();
      onSuccess(res);
    } catch (e) {
      onError(e);
    }
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
