import {Component, OnInit} from '@angular/core';
import {ResourceService} from "../services/resource.service";
import {ActivatedRoute} from "@angular/router";
import {environment} from "src/environments/environment";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public article: any = {}
  public apiBaseUrl: string = environment.apiBaseUrl;

  constructor(public resourceService: ResourceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let idArticle = this.route.snapshot.params.id

    this.resourceService.getResource("/articles/" + idArticle)
      .subscribe(data => {
        this.article = data;
      })
  }

  doThis() {
    console.log('zab')
  }
}
