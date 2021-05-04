import { Injectable } from '@angular/core';
import{AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private firestore: AngularFirestore) { }


  incluir(objeto){
    console.log("Método incluir");
    console.log(objeto);

    return this.firestore.collection('tarefas').add(objeto);
  }

  listar(){
    return this.firestore.collection('tarefas').snapshotChanges();
  }
}
