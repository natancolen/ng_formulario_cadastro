import { ListaClientesService } from '../lista-clientes/lista-clientes.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() clientes: any;

  constructor(private listaClienteService: ListaClientesService) {}

  ngOnInit(): void {
    const jonhWhite = {
      nome: 'Jonh',
      sobrenome: 'White',
      pis: '11100011101',
      email: 'jonhwhite@gmail.com',
      telefone: '31901010101',
    };

    const vivianeRed = {
      nome: 'Vivane',
      sobrenome: 'Red',
      pis: '22200022202',
      email: 'vivired@gmail.com',
      telefone: '31902020202',
    };

    const catarinaGreen = {
      nome: 'Catarina',
      sobrenome: 'Gree',
      pis: '33300033303',
      email: 'catarinagreen@gmail.com',
      telefone: '31903030303',
    };

    const brunaBlue = {
      nome: 'Bruna',
      sobrenome: 'Blue',
      pis: '44400044404',
      email: 'brunablue@gmail.com',
      telefone: '31904040404',
    };

    this.listaClienteService.adicionar(jonhWhite);
    this.listaClienteService.adicionar(vivianeRed);
    this.listaClienteService.adicionar(catarinaGreen);
    this.listaClienteService.adicionar(brunaBlue);
  }
}
