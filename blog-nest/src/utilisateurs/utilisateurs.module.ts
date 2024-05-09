import { Module } from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';
import { UtilisateursController } from './utilisateurs.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UtilisateurEntity } from "./utilisateur.entity/utilisateur.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UtilisateurEntity])],
  providers: [UtilisateursService],
  controllers: [UtilisateursController],
  exports: [UtilisateursService]
})
export class UtilisateursModule {}
