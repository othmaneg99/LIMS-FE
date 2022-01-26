import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesCatalogueComponent} from "./articlesCatalogue/articlesCatalogue.component";
import {ArticlesComponent} from "./articles/articles.component";


const routes: Routes = [
  {
    path: 'articles/:p1/:p2',
    component: ArticlesCatalogueComponent
  },  {
    path: 'articles',
    redirectTo:'articles/1/0',pathMatch:'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
