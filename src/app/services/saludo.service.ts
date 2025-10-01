import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaludoService {
  private apiUrl = 'http://localhost:8080/saludo';

  constructor(private http: HttpClient) {}

  obtenerSaludo(): Observable<{ saludo: string }> {
    return this.http.get<{ saludo: string }>(this.apiUrl);
  }
}
