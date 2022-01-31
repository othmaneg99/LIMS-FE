import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticlesCatalogueComponent} from './articlesCatalogue/articlesCatalogue.component';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ArticlesComponent} from './articles/articles.component';
import {HomeComponent} from './home/home.component';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {FormsModule} from "@angular/forms";
import {UserHeaderComponent} from './user-header/user-header.component';
import {ArticleComponent} from "./article/article.component";
import {AdminComponent} from './admin/admin.component';
import {ListCategoriesComponent} from './list-categories/list-categories.component';
import {AdminSideBarComponent} from './admin-side-bar/admin-side-bar.component';
import {ListLaboratoriesComponent} from './list-laboratories/list-laboratories.component';
import {ListArticlesComponent} from './list-articles/list-articles.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonToggleModule} from "@angular/material/button-toggle";

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
    HomeComponent,
    AdminComponent,
    ListCategoriesComponent,
    AdminSideBarComponent,
    ListLaboratoriesComponent,
    ListArticlesComponent,
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
      {path: 'admin', component: AdminComponent},

    ]),
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
