import { TabelaCadastroModule } from './tabela-cadastro/tabela-cadastro.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { TabelaCadastroComponent } from './tabela-cadastro/tabela-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CadastroModule,
    TabelaCadastroModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
