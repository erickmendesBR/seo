import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { ProdutoComponent } from './produto/produto.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ProdutosComponent, ProdutoComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    RouterModule
  ]
})
export class ProdutosModule { }
