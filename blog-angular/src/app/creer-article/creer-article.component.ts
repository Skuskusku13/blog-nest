import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../service/categorie.service";
import {UtilisateurService} from "../service/utilisateur.service";
import {ArticleRequest} from "../request/article-request";
import {ArticleService} from "../service/article/article.service";
import {ArticleResponse} from "../response/article-response";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-creer-article',
  templateUrl: './creer-article.component.html',
  styleUrl: './creer-article.component.scss'
})
export class CreerArticleComponent implements OnInit{
  categories : any = [];
  utilisateurs: any = [];


  titre: string;
  contenu: string;
  date_publi: string;
  image_url: string;
  idCategory: string;
  nomCategory: string;
  idUtilisateur: string;
  nomUtilisateur: string;
  prenomUtilisateur: string;
  emailUtilisateur: string;

  articleRequest: ArticleRequest;


  constructor(private categorieService: CategorieService,
              private utilisateurService: UtilisateurService,
              private articleService: ArticleService) {
  }

  ngOnInit() {
    this.categorieService.getCategories()
      .subscribe(res => {
      this.categories = res;
    })

    let utilisateurData = this.utilisateurService.getUtilisateurs()
    utilisateurData.subscribe(res => {
      this.utilisateurs = res;
    })
  }

  submit(idUser: string, idCate: string) {
    this.articleService.postArticle(this.articleRequest = {
      titre: this.titre,
      contenu: this.contenu,
      date_publi: this.date_publi,
      image_url: this.image_url,
      category: {
        id: this.categories[idCate].id,
        nom: this.categories[idCate].nom
      },
      utilisateur: {
        id: this.utilisateurs[idUser].id,
        nom: this.utilisateurs[idUser].nom,
        prenom: this.utilisateurs[idUser].prenom,
        email: this.utilisateurs[idUser].email,
      }
    })
    console.log(this.articleRequest)
  }

  protected readonly Number = Number;
}
