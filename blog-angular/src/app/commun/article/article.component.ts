import { Component } from '@angular/core';
import {ArticleService} from "../../service/article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})

export class ArticleComponent {
  articles : any = [];

  constructor(private  articleService: ArticleService) {
  }

  ngOnInit() {
    let articleData = this.articleService.getArticles()
    articleData.subscribe(res => {
      this.articles = res;
    })
  }
}
