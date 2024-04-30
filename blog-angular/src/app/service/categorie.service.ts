import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  env: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCategories() {
    //TODO remplacer le any par ArticleResponse
    // mettre un typage a la fonction de type ** : Observable<ArticleResponse[]> **
    // this.env contient la base de notre url qui permet d'acceder çà l'api
    return this.http.get<any>(`${this.env}/categories`)
  }
}
