// cep-consulta.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepConsultaComponent } from '../src/app/cep-consulta/cep-consulta.component';
import { ApiService } from '../src/services/api.service';
import { AuthService } from '../src/services/auth.service';

@NgModule({
  declarations: [CepConsultaComponent],
  imports: [CommonModule],
  providers: [ApiService, AuthService], // Certifique-se de incluir o AuthService aqui
})
export class CepConsultaModule {}
