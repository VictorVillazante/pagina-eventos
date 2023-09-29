import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ParticipantesService } from '../../services/participantes.service';
import { AdministradoresService } from '../../services/administradores.service';
import { OrganizadoresService } from '../../services/organizadores.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {
  editarPerfil() {
    switch (this.roles[0]) {
      case "PARTICIPANTE":
        this.perfil=this.participantesService.editarPerfil(this.email,this.perfil);
        break;
      case "ORGANIZADOR":
        this.perfil=this.organizadoresService.editarPerfil(this.email,this.editarPerfil);

        break;
      case "ADMINISTRADOR":
        this.perfil=this.administradoresService.editarPerfil(this.email,this.editarPerfil);

        break;
    }
  }
  showPassword() {
    this.verPassword1 = !this.verPassword1;

  }
  showPassword2() {
    this.verPassword2 = !this.verPassword2;
  }
  contrasenia: any = "";
  verPassword1: any = false;
  verPassword2: any = false;
  confirmar_contrasenia: any = "";
  email: any = "";
  roles:any=[];
  perfil:any={

  };
  constructor(private authService: AuthService,private participantesService:ParticipantesService,private administradoresService:AdministradoresService,private organizadoresService:OrganizadoresService) { }

  ngOnInit(): void {
    this.authService.email$.subscribe((email: any) => {
      this.email=email;
      this.authService.roles$.subscribe((roles: any) => {
        this.roles=roles
        switch (roles[0]) {
          case "PARTICIPANTE":
            this.perfil=this.participantesService.obtenerPerfil(email);
            break;
          case "ORGANIZADOR":
            this.perfil=this.organizadoresService.obtenerPerfil(email);

            break;
          case "ADMINISTRADOR":
            this.perfil=this.administradoresService.obtenerPerfil(email);

            break;
        }
      });
    });
  }

}
