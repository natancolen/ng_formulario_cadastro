import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @Output() aoListaDeClientes = new EventEmitter<any>();

  nome: string = '';
  sobrenome: string = '';
  pis: string = '';
  email: string = '';
  telefone: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  registrar() {
    const clienteEmitir = {
      nome: this.nome, sobrenome: this.sobrenome, pis: this.pis,
      email: this.email, telefone: this.telefone
    };

    this.aoListaDeClientes.emit(clienteEmitir);

    console.log(`Cadastro componente - Registrar`);

    this.limparRegistro();
  }

  limparRegistro() {
    this.nome = this.sobrenome = this.pis = this.telefone = this.email = '';
  }

}
