import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { ContatosService} from '../../servicos/contatos.service';



@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.page.html',
  styleUrls: ['./editar-contato.page.scss'],
})
export class EditarContatoPage implements OnInit {
   
  nome: string;
  email: string;
  telefone: number;

  constructor(private contatos: ContatosService, private nav: NavController) { }

  ngOnInit() {
  }

  funcaoOk(){
    console.log(this.nome);
    console.log(this.email);
    console.log(this.telefone);

     let contatos = {};

    contatos['nome'] = this.nome;
    contatos['email'] = this.email;
    contatos['telefone'] = this.telefone;

   

    console.log(contatos);
    this.contatos.Incluir(contatos);
    this.nav.navigateForward("contatos");
    
  }


}
