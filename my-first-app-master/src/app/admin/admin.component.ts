import { Component, OnInit } from '@angular/core';

import { Game } from '../models/usuarios';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  bar : Game[] = [];

  ngOnInit(): void {
    this.usuariosService.getGames().subscribe(
      res => this.bar = (res as Game[]),
      err => console.error(err)
    );
  }

}
