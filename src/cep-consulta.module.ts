// cep-consulta.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepConsultaComponent } from '../src/app/cep-consulta/cep-consulta.component';
import { ApiService } from '../src/services/api.service';
import { AuthService } from '../src/services/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CepConsultaComponent],
  imports: [CommonModule, FormsModule],
  providers: [ApiService, AuthService],
  exports: [CepConsultaComponent],
})
export class CepConsultaModule {}
