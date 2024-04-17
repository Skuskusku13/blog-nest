import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UtilisateurEntity } from "./utilisateur.entity/utilisateur.entity";
import { Repository } from "typeorm";

@Injectable()
export class UtilisateursService {

  constructor(
    @InjectRepository(UtilisateurEntity)
    private utilisateurRepository: Repository<UtilisateurEntity>) {
  }

  async getUtilisateurs(): Promise<UtilisateurEntity[]> {
    return await this.utilisateurRepository.find();
  }

  async getUtilisateur(_id: number): Promise<UtilisateurEntity> {
    return await this.utilisateurRepository.findOneBy({ id: _id });
  }

  async createUtilisateur(user: UtilisateurEntity) {
    if(user.password){
      const password= user.password;
      // const saltOrRounds = 10;
      // const hash = await bcrypt.hash(password, saltOrRounds);
      // user.password= hash;
    }
    return await this.utilisateurRepository.save(user)
  }

  async updateUtilisateur(user: UtilisateurEntity) {
    if(user.password){
      const password= user.password;
      const saltOrRounds = 10;
      // const hash = await bcrypt.hash(password, saltOrRounds);
      // user.password= hash;
    }
    return await this.utilisateurRepository.update(user.id, user);
  }

  async deleteUtilisateur(user: UtilisateurEntity) {
    return await this.utilisateurRepository.delete(user);
  }
}
