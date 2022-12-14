import { Router } from '@angular/router';
import { ListaClientesService } from '../services/lista-clientes.service';
import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

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

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.dadosInput();
  }

  atualizarCadastro() {
    const clienteAtualizado = {
      nome: this.nome,
      sobrenome: this.sobrenome,
      pis: this.pis,
      email: this.email,
      telefone: this.telefone,
    };

    console.log(clienteAtualizado.email);

    this.clienteService.atualizarCadastro(clienteAtualizado);

    this.limparDadosInput();

    this.router.navigate(['/home']);
  }

  dadosInput() {
    this.nome = this.clienteService.cliente.nome;
    this.sobrenome = this.clienteService.cliente.sobrenome;
    this.pis = this.clienteService.cliente.pis;
    this.email = this.clienteService.cliente.email;
    this.telefone = this.clienteService.cliente.telefone;
  }

  deletar() {
    console.log('Deletar-cliente');
    this.clienteService.deletar();
    this.router.navigate(['/home']);
  }

  limparDadosInput() {
    this.nome = '';
    this.sobrenome = '';
    this.pis = '';
    this.email = '';
    this.telefone = '';

    this.clienteService.limparInformacao();
  }
}
