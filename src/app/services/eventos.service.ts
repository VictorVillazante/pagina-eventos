import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  obtenerUltimosEventos() {
    return this.http.get<any[]>("http://localhost:3000/api/eventos/ultimos-eventos");

  }
 
  constructor(private http: HttpClient) { 
  }
}
