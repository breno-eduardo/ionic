import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  constructor() { }

  Incluir(objeto){
    console.log("Método incluir");
    console.log(objeto);
  }
}

