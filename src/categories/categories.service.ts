
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity/category.entity';

@Injectable()
export class CategoriesService {

    constructor(@InjectRepository(CategoryEntity) private categoryRepository: Repository<CategoryEntity>) { }

    async getCategories(): Promise<CategoryEntity[]> {
      return await this.categoryRepository.find({relations:["article"]});
    }

    async getCategory(_id: number): Promise<CategoryEntity> {
      return await this.categoryRepository
        .findOne({ relations:["article"],
          where: [{ "id": _id }]});
    }

    async createCategory(category: CategoryEntity) {
      return await this.categoryRepository.save(category)
    }

    async updateCategory(category: CategoryEntity) {
      return await this.categoryRepository.update(category.id, category);
    }

    async deleteCategory(category: CategoryEntity) {
      return await this.categoryRepository.delete(category);
    }
}
