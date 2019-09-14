import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsuarioComponent } from './pages/add-usuario/add-usuario.component';
import { EventoComponent } from './pages/evento/evento.component';


const routes: Routes = [
  {path:"addUsuario", component:AddUsuarioComponent},
  {path:"evento", component:EventoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
