import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MensagemService } from './../../shared/services/mensagem/mensagem.service';
import { ProdutoService } from '../../shared/services/produto/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private router: Router,
    private mensagemService: MensagemService
  ) { }

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      nomeProduto: [null, [Validators.required]],
      precoProduto: [null, [Validators.required]]
    });
  }

  validacaoForm() {
    // tslint:disable-next-line:forin
    for (const i in this.cadastroForm.controls) {
      this.cadastroForm.controls[i].markAsDirty();
      this.cadastroForm.controls[i].updateValueAndValidity();
    }
  }

  cadastrar() {

    this.validacaoForm();

    if (this.cadastroForm.valid) {
      this.produtoService.cadastrarProduto(this.cadastroForm.value);
      this.router.navigate(['/produtos/listar']);
      this.mensagemService.successMessage('Produto cadastrado!');
    }
  }

  cancelar() {
    this.cadastroForm.reset();
    this.router.navigate(['/produtos/listar']);
  }

}
