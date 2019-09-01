import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "src/app/service/user.service";
import { User } from "src/app/class/user.model";
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.limpar();
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['login']);
    }
  }

  cadastrar() {
    if (this.user.nome == '') {
      alert("Preencha o campo nome!");
    } else if (this.user.cpf == '') {
      alert("Preencha o campo CPF!");
    } else if (this.user.email == '') {
      alert("Preencha o campo E-mail!");
    } else if (this.user.endereco.cep == '') {
      alert("Preencha o campo CEP!");
    } else if (this.user.endereco.logradouro == '') {
      alert("Preencha o campo Logradouro!");
    } else if (this.user.endereco.numero == '') {
      alert("Preencha o campo Número!");
    } else {
      this.userService.createUser(this.user);
      alert("Cadastro efetuado com sucesso!");
      this.limpar();
      this.router.navigate(['home']);
    }
  }

  limpar() {
    this.user = {
      nome: '',
      cpf: '',
      email: '',
      endereco: {
        cep: '',
        logradouro: '',
        numero: '',
        complemento: ''
      },
    } as User;
  }

  cancelar() {
    this.router.navigate(['home']);
  }

}
