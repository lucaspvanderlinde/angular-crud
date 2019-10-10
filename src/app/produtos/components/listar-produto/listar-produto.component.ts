import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

import { MensagemService } from './../../shared/services/mensagem/mensagem.service';
import { ProdutoService } from '../../shared/services/produto/produto.service';
import { Produto } from './../../shared/models/produto.model';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

  produtos: Produto[];

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private modalService: NzModalService,
    private mensagemService: MensagemService
  ) { }

  ngOnInit() {
    this.produtos = this.listarTodosProdutos();
  }

  listarTodosProdutos(): Produto[] {
    return this.produtoService.listarTodosProdutos();
  }

  cadastrarNovoProduto() {
    this.router.navigate(['/produtos/cadastrar']);
  }

  modalRemover(produto: Produto) {
    this.modalService.confirm({
      nzTitle: 'Deseja remover o produto?',
      nzOkText: 'Sim',
      nzOkType: 'danger',
      nzOnOk: () => this.remover(produto),
      nzCancelText: 'Não',
      nzOnCancel: () => ''
    });
  }

  remover(produto: Produto) {
      this.produtoService.removerProduto(produto.id);
      this.produtos = this.produtoService.listarTodosProdutos();
      this.mensagemService.successMessage('Produto removido!');
  }

}
