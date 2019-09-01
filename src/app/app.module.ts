import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AuthService } from "./service/auth.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { IncluirComponent } from './pages/incluir/incluir.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { Rota404Component } from './pages/rota404/rota404.component';
import { LoginComponent } from './pages/login/login.component';
import { FilterNamePipe } from './pipe/filter-name.pipe';
import { FilterCpfPipe } from './pipe/filter-cpf.pipe';
import { OrderPipe } from './pipe/order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IncluirComponent,
    EditarComponent,
    ListarComponent,
    Rota404Component,
    LoginComponent,
    FilterNamePipe,
    FilterCpfPipe,
    OrderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AngularFirestore, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
