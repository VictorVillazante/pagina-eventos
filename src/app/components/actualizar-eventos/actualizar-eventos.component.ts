import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../../services/eventos.service';
import { EspaciosService } from '../../services/espacios.service';

@Component({
  selector: 'app-actualizar-eventos',
  templateUrl: './actualizar-eventos.component.html',
  styleUrls: ['./actualizar-eventos.component.css']
})
export class ActualizarEventosComponent implements OnInit {
  id_espacio_seleccionado:any="";
  cambioEspacio($event: Event) {
    (console.log($event));
  }
  datosFormulario:any={

  }
  actualizarEvento() {
    this.datosFormulario.id_espacio=this.id_espacio_seleccionado;
    this.eventosService.actualizarEvento(this.datosFormulario).subscribe(()=>{
      
    })
  }
  espacios:any[]=[];
  constructor(private activatedRoute:ActivatedRoute,private eventosService:EventosService,private espaciosService:EspaciosService) { }
  ngOnInit(): void {
    this.espaciosService.obtenerEspacios().subscribe((r)=>{
      this.espacios=r;
    })
    this.activatedRoute.params.subscribe((p)=>{
      this.datosFormulario.id_evento=p.id;
      
    })
  }

}
