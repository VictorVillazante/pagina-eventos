import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  email: string = '';
  password: string = '';
  async iniciarSesion() {
    let isLogged = await this.authService.loginWithEmailAndPassword(this.email, this.password);
    if (isLogged) {
      // Swal.fire({
      //   title: 'Logeado correctamente',
      //   confirmButtonText: 'Aceptar',
      //   icon: 'success'

      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     this.router.navigate(["/"]);
      //   }
      // })
      this.router.navigate(["/"]);

    } else {
      // Swal.fire({
      //   title: 'Credenciales incorrectas',
      //   icon: 'error'
      // }).then((result) => {
      //   this.router.navigate(["/login"]);
      // })

    }

  }
}
