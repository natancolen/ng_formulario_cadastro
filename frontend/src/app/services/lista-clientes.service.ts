import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaClientesService {
  private listaDeClientes: any[];

  constructor() {
    this.listaDeClientes = [];
  }

  get clientes() {
    return this.listaDeClientes;
  }

  adicionar($event: any) {
    const clienteCadastrado = this.verificarClienteCadastrado($event);

    if (!clienteCadastrado) {
      const cliente = { ...$event };

      this.listaDeClientes.push(cliente);

      console.log('lista-clientes service - Registrar cliente');
    }
  }

  atualizar(cliente: any, posicao: number) {
    console.log('atualizar-listacliente ' + cliente.nome);

    this.listaDeClientes[posicao].nome = cliente.nome;
    this.listaDeClientes[posicao].sobrenome = cliente.sobrenome;
    this.listaDeClientes[posicao].pis = cliente.pis;
    this.listaDeClientes[posicao].email = cliente.email;
    this.listaDeClientes[posicao].telefone = cliente.telefone;
  }

  deletarCliente(posicao: number) {
    console.log(this.listaDeClientes[posicao].nome);
    this.listaDeClientes.splice(posicao, 1);
  }

  imprimirCliente(posicao: number) {
    if (posicao <= this.tamanhoDaLista() && this.clientes.length > 0) {
      const cliente = this.clientes[posicao];
      console.log(cliente.nome);
      return cliente;
    }
    return;
  }

  posicaoCliente(cliente: any) {
    for (let i = 0; i < this.listaDeClientes.length; i++) {
      if (cliente.pis == this.listaDeClientes[i].pis) {
        return i;
      }
    }

    return -1;
  }

  tamanhoDaLista() {
    return this.listaDeClientes.length;
  }

  private verificarClienteCadastrado(cliente: any) {
    let cadastrado = false;

    if (!cadastrado) {
      for (let i = 0; i < this.listaDeClientes.length; i++) {
        if (cliente.pis == this.listaDeClientes[i].pis) {
          cadastrado = true;
          return true;
        }
        if (cliente.email == this.listaDeClientes[i].email) {
          cadastrado = true;
          return true;
        }
        if (cliente.telefone == this.listaDeClientes[i].telefone) {
          cadastrado = true;
          return true;
        }
      }
    }
    return false;
  }
}
