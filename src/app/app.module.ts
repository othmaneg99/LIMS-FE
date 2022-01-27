import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesCatalogueComponent } from './articlesCatalogue/articlesCatalogue.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import {FormsModule} from "@angular/forms";
import { UserHeaderComponent } from './user-header/user-header.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ArticlesCatalogueComponent,
    ArticlesComponent,
    UserHeaderComponent,
    ArticleComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,

    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'articles', component: ArticlesCatalogueComponent},
      {path: 'articles', component: ArticlesComponent},
      {path: 'article/:id', component: ArticleComponent},


    ]),
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
