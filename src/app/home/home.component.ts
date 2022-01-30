import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GoogleService } from "src/app/services/google.service";
import { NgForm } from "@angular/forms";
import {AuthService} from "src/app/services/auth.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  hidePassword: boolean;
  user: gapi.auth2.GoogleUser | null | undefined;
  lang: string | null;

  constructor(private googleService: GoogleService, private ref: ChangeDetectorRef, private authService: AuthService, private translateService: TranslateService) {
    this.hidePassword = true;
    this.lang = localStorage.getItem('lang');
  }

  ngOnInit(): void {
    this.googleService.observable().subscribe(user => {
      this.user = user;
      this.ref.detectChanges();
    })
  }

  async googleSignIn() {
    await this.googleService.signIn();
    if (this.user) {
      this.authService.signIn(true, this.user).then(this.onSignInSuccess, this.onSignInFail);
    }
  }

  onFormSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.signIn(false, form.value).then(this.onSignInSuccess, this.onSignInFail);
    }
  }

  private onSignInSuccess(res: any) {

  }

  private onSignInFail(err: any) {

  }

  onLangChange(value: string) {
    localStorage.setItem('lang', value);
    this.translateService.use(value);
  }
}
