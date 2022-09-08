import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';

@NgModule({
  declarations: [ClienteComponent],
  imports: [CommonModule, ClienteRoutingModule, FormsModule],
  exports: [ClienteComponent],
})
export class ClienteModule {}
