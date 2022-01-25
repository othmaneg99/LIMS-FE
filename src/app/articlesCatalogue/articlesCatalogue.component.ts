import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../services/articles.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articlesCatalogue.component.html',
  styleUrls: ['./articlesCatalogue.component.scss']
})
export class ArticlesCatalogueComponent implements OnInit {
  public laboratories=  <any> {};
  constructor(private articlesService:ArticlesService) { }

  ngOnInit(): void {
    this.getLaboratories()
  }
  private getLaboratories() {
    this.articlesService.getResource("/laboratories")
      .subscribe(data => {
        this.laboratories = data;
      })

  }

}
