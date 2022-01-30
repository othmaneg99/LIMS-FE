import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  private auth2: gapi.auth2.GoogleAuth | undefined;
  private subject = new ReplaySubject<gapi.auth2.GoogleUser | null>(1);

  constructor() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: "788507047775-qhlv8ofqmarl9gimcv7foi00bm35njin.apps.googleusercontent.com"
      })
    })
  }

  public async signIn() {
    try {
      const user = await this.auth2?.signIn({});
      if (user) {
        this.subject.next(user);
      } else {
        this.subject.next(null);
      }
    } catch (e) {
      this.subject.next(null);
      console.error('Google Sign In:', e);
    }
  }

  public async signOut() {
    try {
      await this.auth2?.signOut();
      this.subject.next(null);
    } catch (e) {
      console.error('Google Sign Out:', e)
    }
  }

  public observable(): Observable<gapi.auth2.GoogleUser | null> {
    return this.subject.asObservable();
  }
}
