import { Controller, Post, Body, Get, Put, Delete, Param } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CategoryEntity } from "./category.entity/category.entity";

@Controller("categories")
export class CategoriesController {
    constructor(private service: CategoriesService) {
    }

    @Get()
    getAll() {
      return this.service.getCategories();
    }

    @Get(":id")
    get(@Param() params) {
      return this.service.getCategory(params.id);
    }

    @Post()
    create(@Body() category: CategoryEntity) {
      return this.service.createCategory(category);
    }

    @Put()
    update(@Body() category: CategoryEntity) {
      return this.service.updateCategory(category);
    }

    @Delete(":id")
    deleteUser(@Param() params) {
      return this.service.deleteCategory(params.id);
    }
}
