import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UtilisateursService } from "../utilisateurs/utilisateurs.service";
import { JwtService } from "@nestjs/jwt"
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {

  constructor(private readonly utilisateursService: UtilisateursService,
              private jwtService: JwtService
  ) {
  }

  async validateUser(username: string, pass: string) {
    const user = await this.utilisateursService.findOne(username);
    const { password, ...result } = user;
    const isMatch = await bcrypt.compare(pass, user.password);
    if (isMatch) {
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
