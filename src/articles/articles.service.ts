import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleEntity } from './articles.entity/articles.entity';
import { CategoryEntity } from "../categories/category.entity/category.entity";
//import { CategoryEntity } from 'src/categories/category.entity/category.entity';

@Injectable()
export class ArticlesService {

    constructor(@InjectRepository(ArticleEntity) private articlesRepository: Repository<ArticleEntity>) { }

    async getArticles(): Promise<ArticleEntity[]> {
      return await this.articlesRepository.find({relations:["category", "utilisateur"]});
    }

    async getArticle(_id: number): Promise<ArticleEntity> {
      return await this.articlesRepository.findOneBy({id:_id})
    }

    async createArticle(article: ArticleEntity) {
      return await this.articlesRepository.save(article)
    }

    async updateArticle(article: ArticleEntity) {
      return await this.articlesRepository.update(article.id, article);
    }

    async deleteArticle(article: ArticleEntity) {
      return await this.articlesRepository.delete(article);
    }
}
