import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';

const routes: Routes = [
  {path:"", component:ListadoProductosComponent},
  {path:"**", component:ListadoProductosComponent},
  {path:"productos", component:ListadoProductosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
