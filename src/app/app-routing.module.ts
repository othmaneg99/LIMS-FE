import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "src/app/home/home.component";
import { ArticlesCatalogueComponent } from "src/app/articlesCatalogue/articlesCatalogue.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'articles',
    redirectTo: 'articles/1/0', pathMatch: 'full'
  },
  {
    path: 'articles/:p1/:p2',
    component: ArticlesCatalogueComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
