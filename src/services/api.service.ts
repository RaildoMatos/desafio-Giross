// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private historico: any[] = [];
  adicionarAoHistorico(consulta: any): void {
    this.historico.push(consulta);
  }

  obterHistorico(): any[] {
    return this.historico;
  }
  consultarCep(cep: string): Observable<any> {
    const url = `https://api.exemplo.com/cep/${cep}`;
    return this.http.get(url);
  }
  private apiUrl = 'http://localhost:3000/api/cep'; // Atualize com o endereço do seu servidor

  constructor(private http: HttpClient) {}
  getHistorico(): Observable<any[]> {
    const url = `${this.apiUrl}/historico`; // Atualize conforme necessário
    return this.http.get<any[]>(url);
  }
}
