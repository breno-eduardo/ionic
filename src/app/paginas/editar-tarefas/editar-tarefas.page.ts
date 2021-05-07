import { Component, OnInit } from '@angular/core';

import { NavController} from '@ionic/angular'
import { TarefaService} from '../../servicos/tarefa.service';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.page.html',
  styleUrls: ['./editar-tarefas.page.scss'],
})
export class EditarTarefasPage implements OnInit {

  id: string;
  nome: string;
  descricao : string;

  constructor(private servico: TarefaService,
              private nav: NavController,
              private rota: ActivatedRoute)  { }

  ngOnInit() {
    this.id = this.rota.snapshot.params['idtarefas'];
    this.nome = this.rota.snapshot.params['nomeTarefas'];
    this.descricao = this.rota.snapshot.params['descTarefas'];
  }

  processar(){
    console.log("Estou na função processar...");
    let tarefas = {};

    tarefas['nome'] = this.nome;
    tarefas['descricao'] = this.descricao;

    console.log(tarefas);
    if (this.id == null){
      this.servico.incluir(tarefas);
    } else{
      this.servico.alterar(tarefas, this.id);
    }

    
    this.nav.navigateForward("tarefas");

  }

}
