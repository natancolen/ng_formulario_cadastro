import { ListaClientesService } from './../lista-clientes/lista-clientes.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private clienteAtual: any;
  private posicaoDaListaCliente: number = -1;
  constructor(private listaClienteService: ListaClientesService) {}

  get posicaoCliente() {
    return this.posicaoDaListaCliente;
  }

  get cliente() {
    return this.clienteAtual;
  }

  clienteEscolhido(cliente: any, posicao: number) {
    this.clienteAtual = cliente;
    this.posicaoDaListaCliente = posicao;
  }

  atualizarCadastro(cliente: any) {
    this.listaClienteService.atualizar(cliente, this.posicaoDaListaCliente);
  }
}
