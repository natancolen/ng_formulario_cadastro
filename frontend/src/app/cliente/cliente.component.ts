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

  constructor(
    private listaClientesService: ListaClientesService,
    private clienteService: ClienteService
  ) {
    this.cliente = clienteService;
  }

  ngOnInit(): void {}

  atualizarCadastro() {}
}
