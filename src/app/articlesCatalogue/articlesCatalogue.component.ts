import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../services/articles.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-articlesCatalogue',
  templateUrl: './articlesCatalogue.component.html',
  styleUrls: ['./articlesCatalogue.component.scss']
})
export class ArticlesCatalogueComponent implements OnInit {
  public laboratories = <any>{};


  constructor(private articlesService: ArticlesService,private router:Router) {
  }

  ngOnInit(): void {
    this.getLaboratories()
  }

  private getLaboratories() {
    this.articlesService.getResource("/laboratories")
      .subscribe(data => {
        this.laboratories = data;
      })


  }


  getArticlesByLab(l: any) {
this.router.navigateByUrl('/articles/2/'+l.id)
  }
}
