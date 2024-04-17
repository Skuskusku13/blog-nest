import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticleEntity } from "./articles.entity/articles.entity";


@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  providers: [ArticlesService],
  controllers: [ArticlesController],
  exports: [ArticlesService]
})
export class ArticlesModule {}
