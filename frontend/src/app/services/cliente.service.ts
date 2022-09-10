import { ListaClientesService } from './lista-clientes.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private clienteAtual: any;
  private semInformacao: any;
  private posicaoDaListaCliente: number = -1;
  constructor(private listaClienteService: ListaClientesService) {}

  get posicaoCliente() {
    return this.posicaoDaListaCliente;
  }

  get cliente() {
    return this.clienteAtual;
  }

  clienteEscolhido(cliente: any) {
    this.clienteAtual = cliente;
    this.posicaoDaListaCliente =
      this.listaClienteService.posicaoCliente(cliente);
  }

  atualizarCadastro(cliente: any) {
    this.listaClienteService.atualizar(cliente, this.posicaoDaListaCliente);
  }

  deletar() {
    this.listaClienteService.deletarCliente(this.posicaoCliente);
  }

  limparInformacao() {
    this.clienteAtual = this.semInformacao;
  }
}
