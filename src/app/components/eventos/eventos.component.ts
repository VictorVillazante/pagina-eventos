import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  buscarEvento() {
    this.eventos=this.todosEventos;
    if(this.nombreEventoBuscar==""){
      this.eventos=this.todosEventos;
    }else{
      this.eventos = this.eventos.filter(curso => (curso.titulo+"").toLowerCase().includes((this.nombreEventoBuscar+"").toLowerCase()));
    }
  }
  nombreEventoBuscar: any;
    habilitarEvento(id: any) {
      this.eventosService.habilitarEvento(id).subscribe((data: any) => {
        // Swal.fire({
        //   title: 'Curso habilitado',
        //   text: 'Curso habilitado de manera correcta',
        //   icon: 'success',
        //   confirmButtonText: 'Aceptar',
        // })
        this.obtenerCursos();
      })
    }
    deshabilitarEvento(id: any) {
      this.eventosService.deshabilitarCurso(id).subscribe((data: any) => {
        // Swal.fire({
        //   title: 'Curso deshabilitado',
        //   text: 'Curso deshabilitado de manera correcta',
        //   icon: 'warning',
        //   confirmButtonText: 'Aceptar'
        // })
        this.obtenerCursos();
      })
    }
    eventos: any[] = [];
    todosEventos:any[]=[];
    constructor(private eventosService: EventosService,private authService:AuthService) { }
    roles:any[]=[];
    email:any="";
    ngOnInit(): void {
      this.authService.roles$.subscribe((roles: any) => {
        console.log("paso algo con roles$ "+roles);
        if(roles!=null){
          this.roles=roles;
          
        }else{
          this.roles=roles;
        }
        this.obtenerCursos();
      });
      this.authService.email$.subscribe((email: any) => {
        console.log("paso algo con roles$ "+email);
        if(email!=null){
          this.email=email;
          
        }else{
          this.email=email;
        }
      });
  
    }
  
    obtenerCursos() {
      for (let rol of this.roles){
        if(rol=="ADMINISTRADOR"){
          this.eventosService.obtenerEventosAdm().subscribe((data: any) => {
            console.log("Datos obtenidos");
            console.log(data);
            this.eventos = data;
            this.todosEventos=data;
          })
        }
        if(rol=="ORGANIZADOR"){
          this.eventosService.obtenerEventossOrganizador(this.email).subscribe((data: any) => {
            console.log("Datos obtenidos");
            console.log(data);
            this.eventos = data;
            this.todosEventos=data;
          })
        }
      }
    
    }

}
