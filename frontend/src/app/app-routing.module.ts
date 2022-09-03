import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo:'/home',},
  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule), },
  { path: 'cadastro',loadChildren: () => import('./cadastro/cadastro.module').then((m) => m.CadastroModule),},
  {path: 'tabela-cadastro', loadChildren:()=> import('./tabela-cadastro/tabela-cadastro.module').then((m) => m.TabelaCadastroModule),}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
