import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarTarefasPage } from './editar-tarefas.page';

const routes: Routes = [
  {
    path: '',
    component: EditarTarefasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarTarefasPageRoutingModule {}
