import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesasComponent } from './despesas/despesas.component';
import { ListaSenadoresComponent } from './lista-senadores/lista-senadores.component';

const routes: Routes = [
  { path: 'senadores', component: ListaSenadoresComponent },
  { path: 'senadores/:id', component: DespesasComponent },
  { path: '', redirectTo: 'senadores', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
