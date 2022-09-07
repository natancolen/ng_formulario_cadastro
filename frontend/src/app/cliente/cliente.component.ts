import { Router } from '@angular/router';
import { ListaClientesService } from './../lista-clientes/lista-clientes.service';
import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  @Input() cliente: any;

  nome: string = '';
  sobrenome: string = '';
  pis: string = '';
  email: string = '';
  telefone: string = '';

  constructor(private clienteService: ClienteService, private router: Router) {
    this.cliente = clienteService;
  }

  ngOnInit(): void {}

  dadosInput() {
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

  atualizarCadastro() {
    this.dadosInput();

    this.cliente.nome = this.nome;
    this.cliente.sobrenome = this.sobrenome;
    this.cliente.pis = this.pis;
    this.cliente.email = this.email;
    this.cliente.telefone = this.telefone;

    const clienteAtualizado = this.cliente;

    console.log(clienteAtualizado.sobrenome);

    this.clienteService.atualizarCadastro(clienteAtualizado);

    this.limparDadosInput();

    this.router.navigate(['/home']);
  }
}
