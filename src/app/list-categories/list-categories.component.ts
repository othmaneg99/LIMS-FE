import {Component, OnInit} from '@angular/core';
import {ResourceService} from "../services/resource.service";

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {
  public host: String = "http://localhost:8081"
  public categories = <any>{};

  constructor(private resourceService: ResourceService) {
  }

  ngOnInit(): void {
    this.getCategories()
  }

  private getCategories() {
    this.resourceService.getResource("/categories")
      .subscribe(data => {
        this.categories = data;
      })
  }

  onDeleteCategory(c: any) {
    let conf = confirm("vous etes sures de voiloir supprimer la catégorie : " + c.name)

    if (conf) {
      this.resourceService.deleteResource(c._links.self.href).subscribe(
        data => {
          this.getCategories()
        }
      )
    }
  }

  onSaveCategory(data: any) {
    this.resourceService.saveResource(this.resourceService.host + "/categories", data).subscribe(
      data => {
        this.getCategories()
      }
    )

  }
}
