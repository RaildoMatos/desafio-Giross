import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CepConsultaComponent } from './cep-consulta/cep-consulta.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'login', component: AuthenticationComponent },
  { path: 'cep-consulta', component: CepConsultaComponent },
  { path: 'history', component: HistoryComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
