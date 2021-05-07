import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { AutenticacaoService } from '../../servicos/autenticacao.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  email: string;
  senha: string;
  
  constructor(private nav: NavController, private servico: AutenticacaoService) { }

  ngOnInit() {
  }

  novo(){
    let usuario = {};

    usuario['email'] = this.email;
    usuario['senha'] = this.Senha;

   this.servico.cadastrar(usuario).then(res => {
      this.nav.navigateForward('inicio');   
    }, err =>{
      console.log(err);
    });

  }

  RegistroOk() {
    console.log("Cheguei aqui.");
    console.log(this.RegistroOk);
    console.log(this.Senha);
  }

  Senha(){
    this.RegistroOk();
    this.email = "";

  }
}
