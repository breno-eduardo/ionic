import { Component, OnInit } from '@angular/core';
import{ TarefaService } from '../../servicos/tarefa.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
})
export class TarefasPage implements OnInit {
  tarefas: any;

  constructor(private servico: TarefaService) { }

  ngOnInit() {
    console.log(this.servico.listar() );
    this.servico.listar().subscribe(data =>{
      this.tarefas = data.map(e =>{
        return{
          id: e.payload.doc.id,
          nome: e.payload.doc.data()['nome'],
          descricao: e.payload.doc.data()['descricao']
        }
        
      })
      console.log(this.tarefas);
    });

}
}
