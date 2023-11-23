// cep-consulta.component.ts

import { Component, Inject } from '@angular/core';
import { CepConsultaService } from '../../services/cep-consulta.service';

@Component({
  selector: 'app-cep-consulta',
  templateUrl: './cep-consulta.component.html',
  styleUrls: ['./cep-consulta.component.scss'],
})
export class CepConsultaComponent {
  cep: any;
  consultarCep(arg0: any, arg1: any) {
    throw new Error('Method not implemented.');
  }
  raio: any;
  constructor(
    @Inject(CepConsultaService) private cepConsultaService: CepConsultaService
  ) {}

  // ...
}
