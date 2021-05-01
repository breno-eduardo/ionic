import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  email: string;
  
  constructor() { }

  ngOnInit() {
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
