import { Component, OnInit } from '@angular/core';
import simpleParallax from 'simple-parallax-js';
import { EventosService } from '../../services/eventos.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private router:Router,private eventosService:EventosService) { }
  contenedor:any;
  contenedor2:any;
  eventos:any[]=[];
  ngOnInit() {
    // this.contenedor = document.querySelector("#eventos-calendario");

    
    // var image = document.getElementsByClassName('thumbnail');
    // new simpleParallax(image,{scale:5,customContainer:this.contenedor});
    this.eventosService.obtenerUltimosEventos().subscribe((eventos:any)=>{
      console.log(eventos);
      this.eventos=eventos;
    })
  }
  obtenerDetalleEvento(id:any){
    this.router.navigate(["detalles-evento",id]);
  }
}
