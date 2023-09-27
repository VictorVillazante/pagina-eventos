import { Component, OnInit } from '@angular/core';
import simpleParallax from 'simple-parallax-js';
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor() { }
  contenedor:any;
  contenedor2:any;

  ngOnInit(): void {
    this.contenedor = document.querySelector("#eventos-calendario");

    
    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image,{scale:5,customContainer:this.contenedor});

  }

}
