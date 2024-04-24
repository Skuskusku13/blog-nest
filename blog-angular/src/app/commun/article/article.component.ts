import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../service/article/article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})

export class ArticleComponent implements OnInit{
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
