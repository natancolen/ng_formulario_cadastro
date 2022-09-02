import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaClientesService {
  private listaDeClientes:any[];

  constructor() {
    this.listaDeClientes = [];
  }

  get clientes() {
    return this.listaDeClientes;
  }

  adicionar($event: any) {
    const listaCliente = { ...$event };
    this.listaDeClientes.push(listaCliente);

    console.log('lista-clientes service - Registrar cliente');
  }
}
