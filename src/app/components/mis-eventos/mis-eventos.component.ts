import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventosService } from 'src/app/services/eventos.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.css']
})
export class MisEventosComponent implements OnInit {

  obtenerDetalleEvento(id: any) {
    this.router.navigate(["detalles-evento", id]);
  }
  email:any="";
  constructor(private authService:AuthService, private router:Router, private eventosService: EventosService,private activatedRoute:ActivatedRoute) { }
  eventos: any[] = [];
  ngOnInit(): void {
    this.authService.email$.subscribe((email: any) => {
      this.email=email;
    })
    this.activatedRoute.params.subscribe((p) => {
     
      this.eventosService.obtenerMisEventos(this.email).subscribe((r: any) => {
        this.eventos = r;
      })
    })
  }

}
