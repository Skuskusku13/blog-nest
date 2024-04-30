import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../service/categorie.service";
import {UtilisateurService} from "../service/utilisateur.service";
import {ArticleRequest} from "../request/article-request";
import {ArticleService} from "../service/article/article.service";
import {ArticleResponse} from "../response/article-response";

@Component({
  selector: 'app-creer-article',
  templateUrl: './creer-article.component.html',
  styleUrl: './creer-article.component.scss'
})
export class CreerArticleComponent implements OnInit{
  categories : any = [];
  utilisateurs: any = [];

  id: number;
  titre: string;
  contenu: string;
  date_publi: string;
  image_url: string;
  idCategory: number;
  nomCategory: string;
  idUtilisateur: number;
  nomUtilisateur: string;
  prenomUtilisateur: string;
  emailUtilisateur: string;

  articleRequest: ArticleRequest;


  constructor(private categorieService: CategorieService,
              private utilisateurService: UtilisateurService,
              private articleService: ArticleService) {
  }

  ngOnInit() {
    let categorieData = this.categorieService.getCategories()
    categorieData.subscribe(res => {
      this.categories = res;
    })

    let utilisateurData = this.utilisateurService.getUtilisateurs()
    utilisateurData.subscribe(res => {
      this.utilisateurs = res;
    })
  }

  submit() {
    this.articleService.postArticle(this.articleRequest = {
      titre: this.titre,
      contenu: this.contenu,
      date_publi: this.date_publi,
      image_url: this.image_url,
      category: {
        id: this.idCategory,
        nom: this.nomCategory,
      },
      utilisateur: {
        id: this.idUtilisateur,
        nom: this.nomUtilisateur,
        prenom: this.prenomUtilisateur,
        email: this.emailUtilisateur,
      }
    })
    console.log(this.articleRequest)
  }



}
