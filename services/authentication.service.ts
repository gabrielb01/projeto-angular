import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  URL = "http://localhost/forum/api/";

  constructor(private http: HttpClient) { }

  // Cadastrar usuário
  cadastrar(dados){
    return this.http.post(URL+"cadastrarUsuario.php", dados);
  }

}



