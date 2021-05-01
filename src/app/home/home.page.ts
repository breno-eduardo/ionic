import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome: string;
  email: string;

  constructor() {}

  ngOnInit() {
  }

  funcaoOk() {
    console.log("Cheguei aqui.");
    console.log(this.nome);
    console.log(this.email);
  }

}
