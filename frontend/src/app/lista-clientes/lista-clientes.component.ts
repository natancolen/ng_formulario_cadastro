import { ListaClientesService } from './lista-clientes.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
})
export class ListaClientesComponent implements OnInit {
  @Input() clientes: any;

  constructor() {}

  ngOnInit(): void {}
}
