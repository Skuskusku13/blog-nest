import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ArticleComponent} from "./commun/article/article.component";
import {CreerArticleComponent} from "./creer-article/creer-article.component";

const routes: Routes = [
  {path: '', redirectTo:'accueil', pathMatch: 'full'},
  {path: 'accueil' , component: AccueilComponent},
  {path: 'article' , component: ArticleComponent},
  {path: 'creerArticle' , component: CreerArticleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
