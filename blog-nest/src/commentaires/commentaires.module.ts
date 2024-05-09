import { Module } from '@nestjs/common';
import { CommentairesService } from './commentaires.service';
import { CommentairesController } from './commentaires.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentaireEntity } from "./commentaire.entity/commentaire.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CommentaireEntity])],
  providers: [CommentairesService],
  controllers: [CommentairesController],
  exports: [CommentairesService]
})
export class CommentairesModule {}
