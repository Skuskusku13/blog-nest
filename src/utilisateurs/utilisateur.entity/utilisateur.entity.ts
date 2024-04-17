import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
