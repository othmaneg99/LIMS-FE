import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "src/app/home/home.component";
import {ArticlesCatalogueComponent} from "src/app/articlesCatalogue/articlesCatalogue.component";
import {ListCategoriesComponent} from "./list-categories/list-categories.component";
import {AdminComponent} from "./admin/admin.component";
import {ListLaboratoriesComponent} from "./list-laboratories/list-laboratories.component";
import {ListArticlesComponent} from "./list-articles/list-articles.component";
import {AddArticleComponent} from "./add-article/add-article.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'articles', redirectTo: 'articles/1/0', pathMatch: 'full'},
  {path: 'articles/:p1/:p2', component: ArticlesCatalogueComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/categories', component: ListCategoriesComponent},
  {path: 'admin/laboratories', component: ListLaboratoriesComponent},
  {path: 'admin/articles', component: ListArticlesComponent},
  {path: 'admin/articles/add', component: AddArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
