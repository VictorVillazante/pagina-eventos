import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  obtenerMisEventos(email: any) {
    return this.http.get<any[]>("http://localhost:3000/api/entradas/mis-eventos/"+email);
  }
  buscarEventoPorNombre(nombre: any) {
    return this.http.get<any[]>("http://localhost:3000/api/eventos/buscar-nombre/"+nombre);
  }
  actualizarEvento(datosFormulario: any) {
    return this.http.put<any[]>("http://localhost:3000/api/eventos",datosFormulario);
  }
  deshabilitarEvento(id: any) {
    return this.http.put<any[]>("http://localhost:3000/api/eventos/deshabilitar/"+id,{});
  }
  habilitarEvento(id: any) {
    return this.http.put<any[]>("http://localhost:3000/api/eventos/habilitar/"+id,{});
  }
  obtenerEventossOrganizador(email: any) {
    return this.http.get<any[]>("http://localhost:3000/api/eventos/ultimos-eventos/"+email);
  }
  obtenerEventosAdm() {
    return this.http.get<any[]>("http://localhost:3000/api/eventos/");
  }
  obtenerUltimosEventos() {
    return this.http.get<any[]>("http://localhost:3000/api/eventos/ultimos-eventos");

  }
 
  constructor(private http: HttpClient) { 
  }
}
