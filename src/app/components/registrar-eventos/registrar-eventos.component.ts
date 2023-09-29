import { Component, OnInit } from '@angular/core';
import { EspaciosService } from '../../services/espacios.service';
import { EventosComponent } from '../eventos/eventos.component';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-registrar-eventos',
  templateUrl: './registrar-eventos.component.html',
  styleUrls: ['./registrar-eventos.component.css']
})
export class RegistrarEventosComponent implements OnInit {
  crearEvento() {
    
  }
  id_espacio_seleccionado:any;
  espacios:any[]=[];
  cambioEspacio($event: Event) {
    this.datosFormulario.id_espacio=this.id_espacio_seleccionado;
    this.eventosService.crearEvento(this.datosFormulario).subscribe(()=>{
      
    })
  }
  datosFormulario:any={

  };
  constructor(private eventosService:EspaciosService,private espaciosService:EspaciosService) { }

  ngOnInit(): void {
    this.espaciosService.obtenerEspacios().subscribe((r)=>{
      this.espacios=r;
    })
  }

}
