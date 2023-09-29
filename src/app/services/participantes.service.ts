import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {
  editarPerfil(email: any, perfil: any): any {
    return this.http.put<Object[]>("http://localhost:3000/api/participantes",perfil);
  }
  obtenerPerfil(email: any) {
    return this.http.get<Object[]>("http://localhost:3000/api/participantes/perfil"+email);
  }
  registrarParticipante(participante:any) {
    return this.http.post<Object[]>("http://localhost:3000/api/usuarios",participante);
  }
  constructor(private http:HttpClient) { }
}
