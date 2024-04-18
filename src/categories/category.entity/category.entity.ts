import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ArticleEntity } from "../../articles/articles.entity/articles.entity";

@Entity()
export class CategoryEntity {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  nom:string;

  @OneToMany(() => ArticleEntity, (product) => product.category)
  article: ArticleEntity[]
}

