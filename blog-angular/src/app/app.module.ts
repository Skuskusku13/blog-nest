import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConexInscComponent } from './conex-insc/conex-insc.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ArticleComponent } from './commun/article/article.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ConexInscComponent,
    AppComponent,
    AccueilComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
