import { ListaClientesService } from './lista-clientes/lista-clientes.service';
import { Component, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private service: ListaClientesService){}

  registrarCliente($event: any) {
    this.service.adicionar($event);
    console.log('app-component - Registrar cliente');
  }
}
