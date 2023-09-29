import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizadoresService {
  editarPerfil(email: any, editarPerfil: any): any {
    return this.http.post<Object[]>("http://localhost:3000/registrar-alumno",{});
  }
  obtenerPerfil(email: any) {
    return this.http.post<Object[]>("http://localhost:3000/registrar-alumno",{});
  }

  constructor(private http:HttpClient) { }
}
