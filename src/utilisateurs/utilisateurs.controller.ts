import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UtilisateursService } from "./utilisateurs.service";
import { UtilisateurEntity } from "./utilisateur.entity/utilisateur.entity";

@Controller('utilisateurs')
export class UtilisateursController {

  constructor(private utilisateursService: UtilisateursService) {}

  @Get()
  getUtilisateurs() {
    return this.utilisateursService.getUtilisateurs();
  }

  @Get(":id")
  getOneUtilisateur(@Param("id") id: number) {
    return this.utilisateursService.getUtilisateur(id);
  }

  @Post()
  create(@Body() user: UtilisateurEntity) {
    console.log(user);
    return this.utilisateursService.createUtilisateur(user);
  }

  @Put()
  update(@Body() user: UtilisateurEntity) {
    return this.utilisateursService.updateUtilisateur(user);
  }

  @Delete(':id')
  deleteUser(@Param("id") id) {
    return this.utilisateursService.deleteUtilisateur(id);
  }

}
