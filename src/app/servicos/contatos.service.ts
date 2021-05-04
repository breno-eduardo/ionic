import { Injectable } from '@angular/core';
import{AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  constructor(private firestore: AngularFirestore) { }

  Incluir(objeto){
    console.log("Método incluir");
    console.log(objeto);

  return this.firestore.collection('colecao').add(objeto);
  }
}

