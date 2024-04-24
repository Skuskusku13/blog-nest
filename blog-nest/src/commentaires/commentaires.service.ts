import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CommentaireEntity } from "./commentaire.entity/commentaire.entity";

@Injectable()
export class CommentairesService {

    constructor(@InjectRepository(CommentaireEntity) private commentairesRepository: Repository<CommentaireEntity>) { }

    async getCommentaires(): Promise<CommentaireEntity[]> {
      return await this.commentairesRepository.find({relations:["utilisateur"]});
    }

    async getCommentaire(_id: number): Promise<CommentaireEntity> {
      return await this.commentairesRepository.findOneBy({id:_id})
    }

    async createCommentaire(article: CommentaireEntity) {
      return await this.commentairesRepository.save(article)
    }

    async updateCommentaire(commentaire: CommentaireEntity) {
      return await this.commentairesRepository.update(commentaire.id, commentaire);
    }

    async deleteCommentaire(commentaire: CommentaireEntity) {
      return await this.commentairesRepository.delete(commentaire);
    }
}