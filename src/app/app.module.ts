import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesCatalogueComponent } from './articlesCatalogue/articlesCatalogue.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { ArticlesComponent } from './articles/articles.component';
import {FormsModule} from "@angular/forms";
import { UserHeaderComponent } from './user-header/user-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesCatalogueComponent,
    ArticlesComponent,
    UserHeaderComponent,
    ArticleComponent
  ],
  imports: [
    FormsModule,

    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'articles', component: ArticlesCatalogueComponent},
      {path: 'articles', component: ArticlesComponent},
      {path: 'article/:id', component: ArticleComponent},


    ]),
    HttpClientModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
