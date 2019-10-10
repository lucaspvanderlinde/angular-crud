import { Routes } from '@angular/router';

import { ListarProdutoComponent } from './components/listar-produto/listar-produto.component';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';

export const ProdutoRoutes: Routes = [
    {
      path: 'produtos',
      redirectTo: 'produtos/listar'
    },
    {
      path: 'produtos/listar',
      component: ListarProdutoComponent
    },
    {
      path: 'produtos/cadastrar',
      component: CadastrarProdutoComponent
    },
    {
      path: 'produtos/editar/:id',
      component: EditarProdutoComponent
    }
];
