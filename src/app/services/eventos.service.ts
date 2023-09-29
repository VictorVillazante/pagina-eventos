import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  buscarEventoPorNombre(nombre: any) {
    return this.http.get<any[]>("http://localhost:3000/api/eventos/ultimos-eventos/");
  }
  actualizarEvento(datosFormulario: any) {
    return this.http.get<any[]>("http://localhost:3000/api/eventos/ultimos-eventos/");
  }
  deshabilitarCurso(id: any) {
    return this.http.get<any[]>("http://localhost:3000/api/eventos/ultimos-eventos/"+id);
  }
  habilitarEvento(id: any) {
    return this.http.get<any[]>("http://localhost:3000/api/eventos/ultimos-eventos/"+id);
  }
  obtenerEventossOrganizador(email: any) {
    return this.http.get<any[]>("http://localhost:3000/api/eventos/ultimos-eventos/"+email);
  }
  obtenerEventosAdm() {
    return this.http.get<any[]>("http://localhost:3000/api/eventos/ultimos-eventos");
  }
  obtenerUltimosEventos() {
    return this.http.get<any[]>("http://localhost:3000/api/eventos/ultimos-eventos");

  }
 
  constructor(private http: HttpClient) { 
  }
}
