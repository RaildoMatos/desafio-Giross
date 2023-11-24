// src/app/auth/login/login.component.ts
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  authService: any;

  constructor(private apiService: ApiService) {}
  login(): void {
    if (this.authService.login(this.username, this.password)) {
      // Redirecione para a página desejada após o login bem-sucedido
    } else {
      console.log('Falha no login. Exibir mensagem de erro ou redirecionar');
    }
  }
}
