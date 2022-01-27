import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../services/articles.service";
import {ArticlesComponent} from "../articles/articles.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
public article:any = {}
  constructor(public articleService:ArticlesService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    let idArticle = this.route.snapshot.params.id

    this.articleService.getResource("/articles/"+idArticle)
      .subscribe(data => {
        this.article = data;
      })
  }

}
