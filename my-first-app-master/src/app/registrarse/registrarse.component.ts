import { Router } from '@angular/router';
import { Component, HostBinding, OnInit } from '@angular/core';
import { SHA512 } from 'crypto-js';
import { Game } from '../models/usuarios';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})


export class RegistrarseComponent implements OnInit {

  games: any = [];
  
  @HostBinding('class') classes = 'row';

  game: Game = {
    Nombre: '',
    Gmail: '',
    Numero: '',
    Contrasena: ''
  };

  datosIngreso: Game = {
    Nombre: '',
    Gmail: '',
    Numero: '',
    Contrasena: ''
  };

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  handleSubmit(event: any): void {
    event.preventDefault();
    const data = new FormData(event.target);
    /*
    const value = JSON.stringify({'Nombre': data.get('name'),
                                  'Gmail':data.get('email'),
                                  'Numero':data.get('cellphone'),
                                  'Contrasena':data.get('password')});*/
    /* */  
    /*
    fetch('http://localhost:4400/registrarse', {
      method: 'post',
      body: value
    })*/
    /* */

  }
/*
  handleIngreso(event: any): void{
    event.preventDefault();
    const data = new FormData(event.target);
    
  /*const value = JSON.stringify({'Nombre': data.get('name'),
                                  'Gmail':data.get('email'),
                                  'Contrasena':data.get('password')});*/
  /*  var response = fetch('http://localhost:4400/registrarse', {
      method: 'get'
    })
    console.log(response);*/
/*
  }*/
  foo : Game[] = [];

  ngOnInit(): void {
    /*
    const form = document.querySelector('form')!;
    form.addEventListener('submit', this.handleSubmit);
    const ingreso = document.querySelectorAll('form')![1];
    ingreso.addEventListener('submit', this.handleIngreso);*/
    this.usuariosService.getGames().subscribe(
      res => this.foo = (res as Game[]),//console.log(res),
      err => console.error(err)
    );
  }
  //let x: unknown = 'hello';
  //console.log((x as string).length);  
  login(){
    
    if(this.datosIngreso.Nombre == 'admin' && 
      this.datosIngreso.Contrasena == 'admin' && 
      this.datosIngreso.Gmail == 'admin'){
     this.router.navigate(['/admin']);
    }

    for(var i = 0; i < this.foo.length; i++){
      if(this.datosIngreso.Nombre == this.foo[i].Nombre && 
         this.datosIngreso.Contrasena == this.foo[i].Contrasena && 
         this.datosIngreso.Gmail == this.foo[i].Gmail){
        this.router.navigate(['/compensar']);
      }
    }
  }

  saveNewGame() {
    console.log(this.game);
    this.usuariosService.saveGame(this.game)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      )
  }
  /*
  Jonathan Ponce
  jp.ponceanima@gmail.com
  973734539
  wildones1
  */
}