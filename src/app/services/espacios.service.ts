import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspaciosService {
  crearEvento(datosFormulario: any) {
    return this.http.get<any[]>("http://localhost:3000/api/eventos/ultimos-eventos/");
  }
  obtenerEspacios() {
    return this.http.get<any[]>("http://localhost:3000/api/eventos/ultimos-eventos/");
  }

  constructor(private http:HttpClient) { }
}
