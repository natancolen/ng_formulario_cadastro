import { TabelaCadastroModule } from './../tabela-cadastro/tabela-cadastro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TabelaCadastroModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
