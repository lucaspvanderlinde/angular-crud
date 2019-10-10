import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoRoutes } from './produtos/produtos-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/produtos/listar',
    pathMatch: 'full'
  },
  ...ProdutoRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
