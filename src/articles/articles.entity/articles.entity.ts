import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { CategoryEntity } from "../../categories/category.entity/category.entity";
import { UtilisateurEntity } from "../../utilisateurs/utilisateur.entity/utilisateur.entity";

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

    @ManyToOne(() => CategoryEntity, (category) => category.article)
    category: CategoryEntity

    @ManyToOne(() => UtilisateurEntity, (utilisateur) => utilisateur.article)
    utilisateur: CategoryEntity

}
