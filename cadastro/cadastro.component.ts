import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  formCadastro;
  dados;

  constructor(private formBuilder: FormBuilder, private auth: AuthenticationService) { 
    this.criarForm();
  }

  ngOnInit(): void {
  }


  criarForm() {
    this.formCadastro = this.formBuilder.group({
      nomeCompleto: [''],
      email       : [''],
      senha       : ['']
    });
  }


  cadastrar() {
    this.dados = {
      nomeCompleto: this.formCadastro.get('nomeCompleto'),
      email       : this.formCadastro.get('email'),
      senha       : this.formCadastro.get('senha')
    };

    this.auth.cadastrar(this.dados)
  }

}
