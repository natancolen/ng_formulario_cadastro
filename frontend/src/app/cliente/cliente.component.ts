import { ListaClientesService } from './../lista-clientes/lista-clientes.service';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  clientes: any;
  cliente: any;

  nome: string = '';
  sobrenome: string = '';
  pis: string = '';
  email: string = '';
  telefone: string = '';

  constructor(
    private listaClientesService: ListaClientesService,
    private clienteService: ClienteService
  ) {
    this.cliente = clienteService;
  }

  ngOnInit(): void {
    if (this.clienteService != null) {
      this.nome = this.clienteService.cliente.nome;
      this.sobrenome = this.clienteService.cliente.sobrenome;
      this.pis = this.clienteService.cliente.pis;
      this.email = this.clienteService.cliente.email;
      this.telefone = this.clienteService.cliente.telefone;
    } else {
      this.limparDadosInput();
    }
  }

  limparDadosInput() {
    this.nome = '';
    this.sobrenome = '';
    this.pis = '';
    this.email = '';
    this.telefone = '';

    this.clienteService.limparInformacao();
  }

  atualizarCadastro() {}
}
