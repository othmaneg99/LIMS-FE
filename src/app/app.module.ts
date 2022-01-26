import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesCatalogueComponent } from './articlesCatalogue/articlesCatalogue.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { ArticlesComponent } from './articles/articles.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesCatalogueComponent,
    ArticlesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'articles', component: ArticlesCatalogueComponent},
      {path: 'articles', component: ArticlesComponent},


    ]),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
