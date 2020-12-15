import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritooService {

  constructor() { }
  productos!:Producto[];

  addProducto(producto:Producto){
    this.productos.push(producto);
  }

  getProducto():Producto[]{
    return this.productos;
  }
}
