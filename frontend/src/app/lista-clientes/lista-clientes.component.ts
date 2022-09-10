import { ClienteService } from '../services/cliente.service';
import { ListaClientesService } from '../services/lista-clientes.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
})
export class ListaClientesComponent implements OnInit {
  @Input() clientes: any;

  constructor(
    private clienteService: ClienteService,
    private listaClienteService: ListaClientesService
  ) {}

  clienteEscolhido() {}

  ngOnInit(): void {}
}
