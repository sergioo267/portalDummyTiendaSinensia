import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  //{path:"producto", component:ProductoComponent},
  {path : 'producto/:id', component : ProductoComponent},

  {path:"productos", component:ListadoProductosComponent},
  {path:"", component:ListadoProductosComponent},
  {path:"**", component:ListadoProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
