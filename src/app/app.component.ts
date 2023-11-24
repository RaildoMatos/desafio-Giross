// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/consulta-cep">Consulta de CEP</a>
      <a routerLink="/historico">Histórico</a>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}
