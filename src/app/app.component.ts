import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LIMS';

  constructor(translateService: TranslateService) {
    const lang = localStorage.getItem('lang');
    if (lang) {
      translateService.use(lang);
    } else {
      localStorage.setItem('lang', translateService.getDefaultLang());
    }
  }
}
