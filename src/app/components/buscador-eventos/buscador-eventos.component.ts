import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-buscador-eventos',
  templateUrl: './buscador-eventos.component.html',
  styleUrls: ['./buscador-eventos.component.css']
})
export class BuscadorEventosComponent implements OnInit {
  obtenerDetalleEvento(id: any) {
    this.router.navigate(["detalles-evento", id]);
  }

  constructor(private router:Router,private activatedRoute: ActivatedRoute, private eventosService: EventosService) { }
  eventos: any[] = [];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((p) => {
      this.eventosService.buscarEventoPorNombre(p.nombre).subscribe((r: any) => {
        this.eventos = r;
      })
    })
  }

}
