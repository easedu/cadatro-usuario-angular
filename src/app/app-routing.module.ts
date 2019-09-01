import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { IncluirComponent } from './pages/incluir/incluir.component';
import { EditarComponent } from './pages/editar/editar.component';
import { Rota404Component } from './pages/rota404/rota404.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path: 'incluir',
    component: IncluirComponent
  },
  {
    path: 'editar',
    component: EditarComponent
  },
  {
    path: '404',
    component: Rota404Component
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
