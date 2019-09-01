import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from "src/app/service/user.service";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from "src/app/class/user.model";
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  user: User;
  userEdit: Observable<string>;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['login']);
    }

    this.route.queryParamMap.pipe(map(params => params.get('user') || 'None'))
      .subscribe(
        (params) => this.user = JSON.parse(params)
      )
  }

  atualizar() {
    this.userService.updateUser(this.user);
    alert("Usuário editado com sucesso");
    this.router.navigate(['listar']);
  }

  cancelar() {
    this.router.navigate(['listar']);
  }

}