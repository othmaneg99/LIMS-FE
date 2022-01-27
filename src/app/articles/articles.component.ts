import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../services/articles.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  public articles = <any>{};
  constructor(public articlesService:ArticlesService,
              private route:ActivatedRoute,
              private router:Router
              ) {

    }


  ngOnInit(): void {
    this.router.events.subscribe((val) =>{
      if (val instanceof NavigationEnd){
        let url = val.url;
        let p1 = this.route.snapshot.params.p1
        if (p1 == 1) {
          this.getArticles("/articles")

        }
        else if (p1 == 2){
          let idLab = this.route.snapshot.params.p2
          this.getArticles("/laboratories/"+idLab+"/articles")
        }
        else if (p1 == 3){
          let idCat = this.route.snapshot.params.p2
          this.getArticles("/categories/"+idCat+"/articles")
        }

      }
    });
    let p1 = this.route.snapshot.params.p1
    if (p1 == 1) {
      this.getArticles("/articles")
      console.log("test")
    }
  }

  private getArticles(url:any) {
    this.articlesService.getResource(url)
      .subscribe(data => {
        this.articles = data;
      })
  }
  private getArticlesByKeyword(mc:any) {
    this.articlesService.getResource('/articles/search/articlesByKeyword?mc='+mc)
      .subscribe(data => {
        this.articles = data;
      })
  }


  onChercher(value: any) {
    this.getArticlesByKeyword(value.keyword)
  }

}
