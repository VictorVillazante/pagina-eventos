import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  }
  estaLogeado: boolean = false;
  constructor(private router: Router) { }
  carritoTamanio: any = 0;
  roles: any[] = [];
  ngOnInit(): void {

  }

}
