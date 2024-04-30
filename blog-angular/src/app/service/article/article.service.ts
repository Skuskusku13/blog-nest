import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {ArticleRequest} from "../../request/article-request";
import {ArticleResponse} from "../../response/article-response";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  env: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getArticles(): Observable<ArticleRequest[]> {
    return this.http.get<ArticleResponse[]>(`${this.env}/articles`)
  }

  postArticle(articleRequest: ArticleRequest) {
    console.log(articleRequest)
    return this.http.post<ArticleRequest>(`${this.env}/articles`, articleRequest, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe()
  }
}
