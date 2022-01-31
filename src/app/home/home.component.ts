import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GoogleService} from "src/app/services/google.service";
import {NgForm} from "@angular/forms";
import {AuthService} from "src/app/services/auth.service";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  hidePassword: boolean;
  user: gapi.auth2.GoogleUser | null | undefined;
  lang: string | null;

  constructor(private googleService: GoogleService,
              private ref: ChangeDetectorRef,
              private authService: AuthService,
              private translateService: TranslateService,
              public router: Router) {
    this.hidePassword = true;
    this.lang = localStorage.getItem('lang');
  }

  ngOnInit(): void {
    this.googleService.observable().subscribe(user => {
      this.user = user;
      this.ref.detectChanges();
    })
  }

  onLangChange(value: string) {
    localStorage.setItem('lang', value);
    this.translateService.use(value);
  }

  async googleSignIn() {
    await this.googleService.signIn();
    if (this.user) {
      try {
        this.onSignInSuccess(await this.authService.signIn({
          googleSignIn: true,
          googleAuthData: {
            firstName: this.user.getBasicProfile().getGivenName(),
            lastName: this.user.getBasicProfile().getFamilyName(),
            email: this.user.getBasicProfile().getEmail(),
            idToken: this.user.getAuthResponse().id_token,
            accessToken: this.user.getAuthResponse().access_token,
            expiresAt: this.user.getAuthResponse().expires_at,
            expiresIn: this.user.getAuthResponse().expires_in,
            issuedAt: this.user.getAuthResponse().first_issued_at,
          }
        }));
      } catch (e) {
        this.onSignInFail(e);
      }
    }
  }

  async onFormSubmit(form: NgForm) {
    if (form.valid) {
      try {
        this.onSignInSuccess(await this.authService.signIn({
          googleSignIn: false,
          ...form.value
        }));
      } catch (e) {
        this.onSignInFail(e);
      }
    }
  }

  private onSignInSuccess(res: any) {
    sessionStorage.setItem('user', btoa(JSON.stringify(res)));
    if (res.role === 'ADMIN') {
      this.router.navigateByUrl('/admin');
    } else {
      this.router.navigateByUrl('/user');
    }
  }

  private onSignInFail(err: any) {
    // todo: temp error message to be changed
    alert(err.message);
  }
}
