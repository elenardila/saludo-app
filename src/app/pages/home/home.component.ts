import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludoService, Saludo } from '../../services/saludo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private api = inject(SaludoService);

  // 🔹 Tu saludo “legacy”
  saludo?: string;
  // 🔹 Lista desde Postgres
  saludos: Saludo[] = [];
  error?: string;

  ngOnInit(): void {
    // Carga saludo simple (no es obligatorio para la práctica, pero lo mantengo)
    this.api.obtenerSaludo().subscribe({
      next: r => this.saludo = r.saludo,
      error: _ => {} // si no existe el endpoint, no molesto
    });

    // Carga lista desde Postgres (esto es lo que pide la práctica)
    this.api.obtenerSaludosLista().subscribe({
      next: d => this.saludos = d,
      error: e => this.error = 'No se pudieron cargar los saludos de la BD (' + (e.status || 'desconocido') + ')'
    });
  }
}
