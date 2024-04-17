import { Entity, Column, PrimaryGeneratedColumn  } from 'typeorm';

@Entity()
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  titre:string;

  @Column('text')
  contenu:string;

  @Column('date')
  date_publi: string;

  @Column('text')
  image_url: string;
}
