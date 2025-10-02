import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// ✅ interfaz para la lista de la BD
export interface Saludo { id: number; mensaje: string; }

@Injectable({ providedIn: 'root' })
export class SaludoService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8080/saludo';

  private apiLista = '/api/saludos';

  obtenerSaludo(): Observable<{ saludo: string }> {
    return this.http.get<{ saludo: string }>(this.apiUrl);
  }

  obtenerSaludosLista(): Observable<Saludo[]> {
    return this.http.get<Saludo[]>(this.apiLista);
  }
}

