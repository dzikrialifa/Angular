import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  constructor() { }
  getDzikri(){
    return [
      {id:1, hobby:"Main Game", ket:"Pada waktu free"},
      {id:2, hobby:"Bersepeda", ket:"pada waktu pagi"},
      {id:3, hobby:"Mendengarkan Musik", ket:"setiap hari"}
    ]
  }
}
