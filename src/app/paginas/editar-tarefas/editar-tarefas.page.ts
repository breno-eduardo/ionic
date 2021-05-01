import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular'
import { TarefaService} from '../../servicos/tarefa.service';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.page.html',
  styleUrls: ['./editar-tarefas.page.scss'],
})
export class EditarTarefasPage implements OnInit {

  nome: string;
  descricao : string;

  constructor(private servico: TarefaService, private nav: NavController)  { }

  ngOnInit() {
  }

  processar(){
    console.log("Estou na função processar...");
    let tarefas = {};

    tarefas['nome'] = this.nome;
    tarefas['descricao'] = this.descricao;

    console.log(tarefas);
    this.servico.incluir(tarefas);
    this.nav.navigateForward("tarefas");

  }

}
