import { MensagemService } from './../../shared/services/mensagem/mensagem.service';
import { Produto } from './../../shared/models/produto.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from '../../shared/services/produto/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  cadastroForm: FormGroup;
  produto: Produto;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private mensagemService: MensagemService
  ) { }

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      id: [null],
      nomeProduto: [null, [Validators.required]],
      precoProduto: [null, [Validators.required]]
    });

    this.capturarId();
  }

  capturarId() {
    const id = +this.route.snapshot.params.id; // Retorna o id com os dados deste produto
    this.produto = this.produtoService.buscarPorId(id);
    this.cadastroForm.patchValue(this.produto); // Seta os valores nos campos do cadastroForm para editar
  }

  editar() {
    if (this.cadastroForm.valid) {

      this.cadastroForm.get(JSON.stringify(this.produto.id)); // Passar somente o id do produto alterado

      this.produtoService.atualizarProduto(this.cadastroForm.value);
      this.router.navigate(['/produtos/listar']);

      if (this.cadastroForm.value['nomeProduto'] !== this.produto.nomeProduto ||
          this.cadastroForm.value['precoProduto'] !== this.produto.precoProduto) {

        this.mensagemService.successMessage('Produto editado!');
      }
    }
  }

  cancelar() {
    this.cadastroForm.reset();
    this.router.navigate(['/produtos/listar']);
  }

}
