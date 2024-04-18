import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleEntity } from './articles.entity/articles.entity';
//import { CategoryEntity } from 'src/categories/category.entity/category.entity';

@Injectable()
export class ArticlesService {

    constructor(@InjectRepository(ArticleEntity) private articlesRepository: Repository<ArticleEntity>) { }

  async getArticles(): Promise<ArticleEntity[]> {
    return await this.articlesRepository.find();
  }

  async getArticle(_id: number): Promise<ArticleEntity> {
    return await this.articlesRepository.findOneBy({id:_id})
  }

   /* async getProductsByCategorie(cat: CategoryEntity): Promise<ArticlesEntity[]> {
      return await this.productsRepository.find({where:{category:cat},  order: {price: "DESC"}})
    }*/

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
