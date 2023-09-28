import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantesService } from '../../services/participantes.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css']
})
export class RegistrateComponent implements OnInit {
  showPassword2() {
    this.verPassword2=!this.verPassword2;
  }
  verPassword1:boolean=false;
  verPassword2:boolean=false;

  showPassword() {
    this.verPassword1=!this.verPassword1;
  }
  registrarAlumno() {
    let participante={
      nombres:this.nombres+"",
      apellidos:this.apellidos+"",
      email:this.email+"",
      contrasenia:this.contrasenia+"",
      habilitad:1
    }
    if(this.contrasenia===this.confirmar_contrasenia){
      this.participantesService.registrarParticipante(participante).subscribe((data:any)=>{
        if(data.token!=null){
          this.authService.user$.next(data.token);

          // Swal.fire({
          //   title: 'Usuario registrado',
          //   text: 'Registro de usuario exitoso',
          //   icon: 'success',
          // }).then((result) => {
          //   this.authService.user$.next(data.token);
          // });
        

        }else{
          console.log(data);
        }
       
      })
    }
  }
  nombres: any="";
  apellidos:any ="";
  email:any="";
  contrasenia:any="";
  confirmar_contrasenia:any="";

  constructor(private authService:AuthService,private router:Router,private participantesService:ParticipantesService) { }

  ngOnInit(): void {
  }

}
