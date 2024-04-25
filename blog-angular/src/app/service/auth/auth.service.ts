import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {LoginResponse} from "../../response/login-response";
import {LoginRequest} from "../../request/login-request";
import {RegisterResponse} from "../../response/register-response";
import {RegisterRequest} from "../../request/register-request";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  env: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  // Authentification avec nom d'utilisateur et mot de passe
  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.env}/auth/login`, loginRequest, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  postUtilisateur(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.env}/utilisateurs`, registerRequest)
  }

  getProfile(token: string){
    return this.http.get(`${this.env}/auth/profile`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      }),
    });
  }
}
