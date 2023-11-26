// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  consultarCep: any;
  adicionarAoHistorico(response: any) {
    throw new Error('Method not implemented.');
  }
  apiUrl = 'http://localhost:3000'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}

  // Em api.service.ts

  consultarCeps(cep: string, raio: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cep-consulta`, { cep, raio });
  }

  obterHistorico(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/history`);
  }
}
