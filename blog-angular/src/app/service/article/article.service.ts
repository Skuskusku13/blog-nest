import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  env: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getArticles() {
    //TODO remplacer le anby par ArticleResponse
    // mettre un typage a la fonction de type ** : Observable<ArticleResponse[]> **
    // this.env contient la base de notre url qui permet d'acceder çà l'api
    return this.http.get<any>(`${this.env}/articles`)
  }
}
