import { TabelaCadastroComponent } from './tabela-cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabelaCadastroRoutingModule } from './tabela-cadastro-routing.module';


@NgModule({
  declarations: [
    TabelaCadastroComponent
  ],
  imports: [
    CommonModule,
    TabelaCadastroRoutingModule
  ],
  exports: [
    TabelaCadastroComponent
  ]
})
export class TabelaCadastroModule { }
