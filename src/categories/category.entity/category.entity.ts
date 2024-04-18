
import { Entity, Column, PrimaryGeneratedColumn  } from 'typeorm';

@Entity()
export class CategoryEntity {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  nom:string;
}

