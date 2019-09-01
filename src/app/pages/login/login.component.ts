import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    senha: ''
  }

  constructor(private authService: AuthService, private router: Router) {
  }

  signInWithEmail() {

    this.authService.signInRegular(this.login.email, this.login.senha)
      .then((res) => {
        console.log(res);
        this.router.navigate(['home']);
      })
      .catch((err) => {
        alert("Login ou senha inválido, por favor tente novamente");
      });
  }

  ngOnInit() {
  }

  autoPreencherLogin() {
    this.login = {
      email: 'teste@teste.com',
      senha: 'teste123'
    }
    this.signInWithEmail();
  }

}