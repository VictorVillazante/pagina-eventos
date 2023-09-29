import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspaciosService {
  obtenerEspacios() {
    return this.http.get<any[]>("http://localhost:3000/api/eventos/ultimos-eventos/");
  }

  constructor(private http:HttpClient) { }
}
