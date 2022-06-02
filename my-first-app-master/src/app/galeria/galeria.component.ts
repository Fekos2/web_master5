import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  SeleccionarTodas(): void {
    let fotos = document.querySelectorAll(".data-box");

    for(let i = 0; i < fotos.length; i++) {
      fotos[i].classList.remove("hide");
    }
  }

  SeleccionarInterior(): void {
    let fotos = document.querySelectorAll(".data-box");
    for(let i = 0; i < fotos.length; i++) {
      if(fotos[i].getAttribute("data-item") != "interior")
      {
        fotos[i].classList.add("hide"); 
        continue;   
      }
      fotos[i].classList.remove("hide");
    }
  }

  SeleccionarExterior(): void {
    let fotos = document.querySelectorAll(".data-box");
    for(let i = 0; i < fotos.length; i++) {
      if(fotos[i].getAttribute("data-item") != "exterior")
      {
        fotos[i].classList.add("hide"); 
        continue;   
      }
      fotos[i].classList.remove("hide");
    }
  }

  SeleccionarArte(): void {
    let fotos = document.querySelectorAll(".data-box");
    for(let i = 0; i < fotos.length; i++) {
      if(fotos[i].getAttribute("data-item") != "arte")
      {
        fotos[i].classList.add("hide"); 
        continue;   
      }
      fotos[i].classList.remove("hide");
    }
  }
}
