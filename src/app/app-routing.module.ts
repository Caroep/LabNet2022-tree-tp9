import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { FormularioComponent } from './categorias/formulario/formulario.component';

const routes: Routes = [
  {path:'categorias', component : CategoriasComponent},
  {path:'formulario', component : FormularioComponent}
];

export const routing = RouterModule.forRoot(routes);
@NgModule({
imports: [RouterModule.forRoot(routes)], 
exports: [RouterModule]
})
export class AppRoutingModule { }
