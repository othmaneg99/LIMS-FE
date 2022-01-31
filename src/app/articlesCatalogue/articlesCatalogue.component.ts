import { Component, OnInit } from '@angular/core';
import {ResourceService} from "../services/resource.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-articlesCatalogue',
  templateUrl: './articlesCatalogue.component.html',
  styleUrls: ['./articlesCatalogue.component.scss']
})
export class ArticlesCatalogueComponent implements OnInit {
  public laboratories = <any>{};
  public categories = <any>{};


  constructor(private resourceService: ResourceService, private router:Router) {
  }

  ngOnInit(): void {
    this.getLaboratories()
    this.getCategories()
  }

  private getLaboratories() {
    this.resourceService.getResource("/laboratories")
      .subscribe(data => {
        this.laboratories = data;
      })


  }


  getArticlesByLab(l: any) {
this.router.navigateByUrl('/articles/2/'+l.id)
  }

  private getCategories() {
    this.resourceService.getResource("/categories")
      .subscribe(data => {
        this.categories = data;
      })
  }

  getArticlesByCat(c: any) {
    this.router.navigateByUrl('/articles/3/'+c.id)
  }
}
