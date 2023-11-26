// src/app/cep-consulta/cep-consulta.component.ts
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cep-consulta',
  templateUrl: './cep-consulta.component.html',
  styleUrls: ['./cep-consulta.component.scss'],
})
export class CepConsultaComponent {
  resultadoConsulta: any;
  historico!: any[];
  cep: any;
  raio: any;
  authService: any;

  constructor(private apiService: ApiService) {}

  consultarCep(cep: string): void {
    if (this.authService.isAuthenticatedUser()) {
      this.apiService.consultarCep(cep).subscribe(
        (response: any) => {
          this.resultadoConsulta = response;
        },
        (error: any) => {
          console.error('Erro ao consultar CEP:', error);
        }
      );
    } else {
      console.log(
        'Usuário não autenticado. Redirecionando para a página de login.'
      );
    }
  }

  obterHistorico(): void {
    this.apiService.obterHistorico().subscribe(
      (historico: any[]) => {
        this.historico = historico;
      },
      (error: any) => {
        console.error('Erro ao obter histórico:', error);
      }
    );
  }
}
function obterHistorico() {
  throw new Error('Function not implemented.');
}
