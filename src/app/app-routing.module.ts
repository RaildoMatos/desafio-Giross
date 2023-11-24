// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CepConsultaComponent } from './cep-consulta/cep-consulta.component';
import { HistoryComponent } from '../app/history/history.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'consulta-cep', component: CepConsultaComponent },
  { path: 'historico', component: HistoryComponent },
  { path: '', redirectTo: '/consulta-cep', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
