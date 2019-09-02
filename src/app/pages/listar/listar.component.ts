import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/service/user.service";
import { User } from "src/app/class/user.model";
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  users: User[];
  orderBy: string;
  filtroNome: string;
  filtroCpf: string;
  
  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['login']);
    }

    this.userService.getUsers().subscribe(data => {
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as User;
      })
    })
  }

  editar(user: User) {
    let userEdit = JSON.stringify(user);
    let navigationExtras: NavigationExtras = {
      queryParams: { 'user': userEdit }
    };
    this.router.navigate(['editar'], navigationExtras);
  }

  excluir(id: string) {
    this.userService.deleteUser(id);
  }

  orderByFilter(order: string) {
    this.orderBy = order;
  }

}
