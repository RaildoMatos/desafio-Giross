// cep-consulta.component.ts
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cep-consulta',
  templateUrl: './cep-consulta.component.html',
  styleUrls: ['./cep-consulta.component.scss'],
})
export class CepConsultaComponent {
  resultadoConsulta: any;
  raioInput: any;

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  consultarCep(cep: string): void {
    if (this.authService.isAuthenticatedUser()) {
      this.apiService.consultarCep(cep).subscribe(
        (response: any) => {
          this.resultadoConsulta = response;
          this.apiService.adicionarAoHistorico(response);
        },
        (error: any) => {
          console.error('Erro ao consultar CEP:', error);
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
