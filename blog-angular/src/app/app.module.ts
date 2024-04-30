import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ConexInscComponent} from './conex-insc/conex-insc.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ArticleComponent} from './commun/article/article.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { CreerArticleComponent } from './creer-article/creer-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ConexInscComponent,
    AppComponent,
    AccueilComponent,
    ArticleComponent,
    AppComponent,
    FooterComponent,
    CreerArticleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
