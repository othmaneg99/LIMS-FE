import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../services/articles.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public imagesPath = "C:/Users/othmane/lims/articles/" +
    ""
  public articles = <any>{};
  constructor(public articlesService:ArticlesService,
              private route:ActivatedRoute
              ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id)
    this.getArticles()
  }
  private getArticles() {
    this.articlesService.getResource("/articles")
      .subscribe(data => {
        this.articles = data;
      })
  }


}
