import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {
  editarPerfil(email: any, perfil: any): any {
    return this.http.post<Object[]>("http://localhost:3000/registrar-alumno",{});
  }
  obtenerPerfil(email: any) {
    return this.http.post<Object[]>("http://localhost:3000/registrar-alumno",{});
  }
  registrarParticipante(participante:any) {
    return this.http.post<Object[]>("http://localhost:3000/registrar-alumno",participante);
  }
  constructor(private http:HttpClient) { }
}
