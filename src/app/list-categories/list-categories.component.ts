import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../services/articles.service";
import {ArticlesComponent} from "../articles/articles.component";

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {
  public host:String = "http://localhost:8081"
  public categories = <any>{};
  constructor(private articlesService: ArticlesService,
              ) { }

  ngOnInit(): void {
    this.getCategories()
  }

  private getCategories() {
    this.articlesService.getResource("/categories")
      .subscribe(data => {
        this.categories = data;
      })
  }

  onDeleteCategory(c: any) {
    let  conf = confirm("vous etes sures de voiloir supprimer la catégorie : "+c.name)

    if(conf) {
      this.articlesService.deleteResource(c._links.self.href).subscribe(
        data => {
          this.getCategories()
        }
      )
    }
  }

  onSaveCategory(data: any) {
this.articlesService.saveResource(this.articlesService.host+"/categories",data).subscribe(
  data => {
    this.getCategories()
  }
)

  }
}
