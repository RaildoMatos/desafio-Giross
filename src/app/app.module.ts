// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Adicione esta linha
import { AppComponent } from './app.component';
import { LoginComponent } from '../login/login.component';
import { HistoryComponent } from './history/history.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ApiService } from 'src/services/api.service';
import { AuthService } from './auth.service';
import { CepConsultaModule } from 'src/cep-consulta.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    HistoryComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    FormsModule,
    CepConsultaModule,
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private router: Router) {}
  navegarParaHistorico() {
    this.router.navigate(['/historico']);
  }
}
