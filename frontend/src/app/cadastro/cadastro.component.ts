import { ListaClientesService } from '../services/lista-clientes.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  EmailValidator,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  //@Output() aoListaDeClientes: EventEmitter<any> = new EventEmitter();
  public invalidField = 'Campo inválido!';

  public clientForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    sobrenome: new FormControl('', Validators.required),
    pis: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
  });

  constructor(
    private listaClienteService: ListaClientesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  registrar() {
    if (!this.clientForm) {
      alert(this.invalidField);
      return;
    }

    this.listaClienteService.adicionar(this.clientForm.getRawValue());

    this.limparRegistro();

    this.router.navigate(['tabela-cadastro']);
  }

  limparRegistro() {
    this.clientForm.clearValidators();
  }
}
