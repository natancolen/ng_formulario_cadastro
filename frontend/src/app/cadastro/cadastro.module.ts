import { TabelaCadastroModule } from './../tabela-cadastro/tabela-cadastro.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    FormsModule,
    TabelaCadastroModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
