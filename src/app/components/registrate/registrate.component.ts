import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    // let alumno={
    //   nombres:this.nombres+"",
    //   apellidos:this.apellidos+"",
    //   email:this.email+"",
    //   contrasenia:this.contrasenia+""
    // }
    // if(this.contrasenia===this.confirmar_contrasenia){
    //   this.alumnoService.registrarAlumno(alumno).subscribe((data:any)=>{
    //     if(data.token!=null){
    //       Swal.fire({
    //         title: 'Usuario registrado',
    //         text: 'Registro de usuario exitoso',
    //         icon: 'success',
    //       }).then((result) => {
    //         this.authService.user$.next(data.token);
    //         this.router.navigate(["/menu-usuario"]);    
    //       });
        

    //     }else{
    //       console.log(data);
    //     }
       
    //   })
    // }
  }
  nombres: any="";
  apellidos:any ="";
  email:any="";
  contrasenia:any="";
  confirmar_contrasenia:any="";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
