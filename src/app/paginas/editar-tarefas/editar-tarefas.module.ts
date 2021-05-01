import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarTarefasPageRoutingModule } from './editar-tarefas-routing.module';

import { EditarTarefasPage } from './editar-tarefas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarTarefasPageRoutingModule
  ],
  declarations: [EditarTarefasPage]
})
export class EditarTarefasPageModule {}
