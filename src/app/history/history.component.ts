// historico.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  historyList: any[] | undefined;
  apiService: any;
  constructor(public authService: AuthService) {}
  isUserAuthenticated(): boolean {
    return this.authService.isAuthenticatedUser();
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticatedUser()) {
      this.apiService.getHistorico().subscribe(
        (response: any) => {
          this.historyList = response;
        },
        (error: any) => {
          console.error('Erro ao obter histórico:', error);
        }
      );
    } else {
      console.log(
        'Usuário não autenticado. Redirecionando para a página de login.'
      );
      // Adicione lógica para redirecionar para a página de login
    }
  }
}
