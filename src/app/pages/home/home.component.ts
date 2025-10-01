import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludoService } from '../../services/saludo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Saludo desde el backend:</h1>
    <p *ngIf="saludo$ | async as saludo">{{ saludo.saludo }}</p>
  `
})
export class HomeComponent {
  saludo$: Observable<{ saludo: string }>;

  constructor(private saludoService: SaludoService) {
    this.saludo$ = this.saludoService.obtenerSaludo();
  }
}
