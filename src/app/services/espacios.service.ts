import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspaciosService {
  
  obtenerEspacios() {
    return this.http.get<any[]>("http://localhost:3000/api/espacios/");
  }

  constructor(private http:HttpClient) { }
}
