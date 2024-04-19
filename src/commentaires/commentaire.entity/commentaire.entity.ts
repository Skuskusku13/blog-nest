import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UtilisateurEntity } from "../../utilisateurs/utilisateur.entity/utilisateur.entity";

@Entity()
export class CommentaireEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  titre:string;

  @Column('text')
  contenu:string;

  @Column('date')
  date_com: string;

  @ManyToOne(() => UtilisateurEntity, (utilisateur) => utilisateur.commentaires)
  utilisateur: UtilisateurEntity
}