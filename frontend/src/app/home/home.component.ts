import { ListaClientesService } from '../services/lista-clientes.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() clientes: any;

  constructor(private listaClienteService: ListaClientesService) {}

  ngOnInit(): void {}
}
