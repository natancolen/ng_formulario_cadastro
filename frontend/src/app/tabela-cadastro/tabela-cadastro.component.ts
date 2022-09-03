import { ListaClientesService } from './../lista-clientes/lista-clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-cadastro',
  templateUrl: './tabela-cadastro.component.html',
  styleUrls: ['./tabela-cadastro.component.css']
})
export class TabelaCadastroComponent implements OnInit {
  clientes: any;

  constructor(private service: ListaClientesService) { }

  ngOnInit(): void {
    this.clientes = this.service.clientes;
  }

}
