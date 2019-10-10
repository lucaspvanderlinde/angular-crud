import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgxCurrencyModule } from 'ngx-currency';

import { ListarProdutoComponent } from './components/listar-produto/listar-produto.component';
import { ProdutoService } from './shared/services/produto/produto.service';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';


@NgModule({
  declarations: [
    ListarProdutoComponent,
    CadastrarProdutoComponent,
    EditarProdutoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    NgxCurrencyModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    NgxCurrencyModule
  ],
  providers: [
    ProdutoService
  ]
})
export class ProdutosModule { }
