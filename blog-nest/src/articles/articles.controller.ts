import { Controller, Post, Body, Get, Put, Delete, Param } from "@nestjs/common";
import { ArticlesService } from "./articles.service";
import { ArticleEntity } from "./articles.entity/articles.entity";

@Controller("articles")
export class ArticlesController {
    constructor(private service: ArticlesService) {
    }

    @Get()
    getAll() {
      return this.service.getArticles();
    }

    @Get(":id")
    get(@Param() params) {
      return this.service.getArticle(params.id);
    }

    @Post()
    create(@Body() article: ArticleEntity) {
      return this.service.createArticle(article);
    }

    @Put()
    update(@Body() article: ArticleEntity) {
      return this.service.updateArticle(article);
    }

    @Delete(":id")
    deleteUser(@Param() params) {
      return this.service.deleteArticle(params.id);
    }
}
