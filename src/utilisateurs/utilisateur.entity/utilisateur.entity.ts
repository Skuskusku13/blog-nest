import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ArticleEntity } from "../../articles/articles.entity/articles.entity";

@Entity()
export class UtilisateurEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nom: string;

  @Column({ length: 50 })
  prenom: string;

  @Column({ length: 100 })
  email: string;

  @Column('text')
  password: string;

  @OneToMany(() => ArticleEntity, (article) => article.category)
  article: ArticleEntity[]
}
