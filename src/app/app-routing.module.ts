import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  
  
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'contatos',
    loadChildren: () => import('./paginas/contatos/contatos.module').then( m => m.ContatosPageModule)
  },
  {
    path: 'editar-contato',
    loadChildren: () => import('./paginas/editar-contato/editar-contato.module').then( m => m.EditarContatoPageModule)
  },
  {
    path: 'tarefas',
    loadChildren: () => import('./paginas/tarefas/tarefas.module').then( m => m.TarefasPageModule)
  },
  {
    path: 'editar-tarefas',
    loadChildren: () => import('./paginas/editar-tarefas/editar-tarefas.module').then( m => m.EditarTarefasPageModule)
  },
  
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
