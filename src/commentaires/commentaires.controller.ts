import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CommentairesService } from "./commentaires.service";
import { CommentaireEntity} from "./commentaire.entity/commentaire.entity";


@Controller("commentaires")
export class CommentairesController {
    constructor(private commentairesservice: CommentairesService) {
    }

    @Get()
    getCommentaires() {
      return this.commentairesservice.getCommentaires();
    }

    @Get(":id")
    get(@Param() params) {
      return this.commentairesservice.getCommentaire(params.id);
    }

    @Post()
    create(@Body() commentaire: CommentaireEntity) {
      return this.commentairesservice.createCommentaire(commentaire);
    }

    @Put()
    update(@Body() commentaire: CommentaireEntity) {
      return this.commentairesservice.updateCommentaire(commentaire);
    }

    @Delete(":id")
    deleteUser(@Param() params) {
      return this.commentairesservice.deleteCommentaire(params.id);
    }
}