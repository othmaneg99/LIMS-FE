import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesCatalogueComponent} from "./articlesCatalogue/articlesCatalogue.component";
import {ArticlesComponent} from "./articles/articles.component";


const routes: Routes = [
  {
    path: 'articles/:id',
    component: ArticlesCatalogueComponent
  },  {
    path: 'articles/',
    redirectTo:'articles/1',pathMatch:'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
