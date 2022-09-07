import { TabelaCadastroComponent } from './../tabela-cadastro/tabela-cadastro.component';
import { ListaClientesService } from '../lista-clientes/lista-clientes.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  //@Output() aoListaDeClientes: EventEmitter<any> = new EventEmitter();

  nome: string = '';
  sobrenome: string = '';
  pis: string = '';
  email: string = '';
  telefone: string = '';

  constructor(
    private listaClienteService: ListaClientesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  registrar() {
    const cliente = {
      nome: this.nome,
      sobrenome: this.sobrenome,
      pis: this.pis,
      email: this.email,
      telefone: this.telefone,
    };

    this.listaClienteService.adicionar(cliente);

    console.log(`app-cadastro-component - Registrar`);

    this.limparRegistro();

    this.router.navigate(['tabela-cadastro']);
  }

  limparRegistro() {
    this.nome = this.sobrenome = this.pis = this.telefone = this.email = '';
  }
}
