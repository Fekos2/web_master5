import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Game } from  '../models/usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})

export class UsuariosService {

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get('http://localhost:3000/api/games');
  }
/*
  getGame(Contrasena: string) {
    return this.http.get('http://localhost:3000/api/games/' + Contrasena);
  }*/
/*
  deleteGame(Contrasena: string) {
    return this.http.delete('http://localhost:3000/api/games/' + Contrasena);
  }*/
  
  saveGame(game: Game) {
    return this.http.post('http://localhost:3000/api/games', game);
  }
  /*
  updateGame(nombre: string, updateGame: Game){
    return this.http.put('${this.API_URI}/games/${nombre}',updateGame);
  }*/



}
