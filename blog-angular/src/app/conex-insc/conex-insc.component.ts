import {Component, Input, OnInit} from '@angular/core';
import {Authchoice} from "./authchoice";
import {LoginRequest} from "../request/login-request";
import {RegisterRequest} from "../request/register-request";
import {AuthService} from "../service/auth/auth.service";

@Component({
  selector: 'app-conex-insc',
  templateUrl: './conex-insc.component.html',
  styleUrl: './conex-insc.component.scss'
})
export class ConexInscComponent implements OnInit{
  @Input() choiceComponent: Authchoice;

  loginRequest: LoginRequest;
  registerRequest: RegisterRequest;
  accessToken: string;

  // TODO verification de si les champs sont vide
  disabledButton: boolean = true;

  // variables dependantes du composant
  titleComponent: string;
  buttonComponent: string
  labelEmail: string

  // variable pour gere la connexion
  usernameC: string;
  passwordC: string;

  // variable pour gere l'inscription
  nom: string;
  prenom: string;
  email: string;
  password: string;
  id: number;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.defineWording()
  }

  resetForm() {
  //   TODO effacer toutes les donnees du formulaire
    if(this.choiceComponent.type === 'CONNEXION') {
      this.passwordC = this.usernameC = "";
    } else {

    }
  }

  redirectButtonAuth() {
    if(this.choiceComponent.type === 'CONNEXION') {
      this.loginUser();
    } else {
      this.registerUser();
    }
  }

  registerUser() {
    return this.authService.postUtilisateur(this.registerRequest =
      {id: this.id,
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        password: this.password})
      .subscribe(value => {
        console.log(value)
      })
  }

  loginUser() {
    if (!this.usernameC || !this.passwordC) {
      console.error("Username and password cannot be empty.");
      return;
    }
    return this.authService.login(this.loginRequest =
      {username: this.usernameC, password: this.passwordC})
      .subscribe((loginResponse) => {
        this.accessToken = loginResponse.access_token
        this.authService.getProfile(this.accessToken)
          .subscribe(value => {
          console.log(value)
        })
      })
  }

  defineWording() {
    if(this.choiceComponent.type === 'CONNEXION') {
      this.titleComponent = 'Vous avez déjà un compte ?\nConnectez-vous'
      this.buttonComponent = 'Je me connecte'
      this.labelEmail = 'Username'
    } else {
      this.titleComponent = 'Vous n\'avez pas encore de compte ?\nInscrivez-vous gratuitement'
      this.buttonComponent = 'Je m\'inscris'
      this.labelEmail = 'Email'
    }
  }




}
