import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nombreEventoBuscar: any = "";
  buscarEvento() {
    this.router.navigate(['/buscador-eventos', this.nombreEventoBuscar]);
  }
  logout() {
    this.authService.logout();
  }
  estaLogeado: boolean = false;
  constructor(private router: Router,private authService:AuthService) { }
  carritoTamanio: any = 0;
  roles: any[] = [];
  ngOnInit(): void {

  }

}
