import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritooService {

  productos!:Producto[];
  constructor() { 
    this.productos = new Array();
  }

  addProducto(producto:Producto){
    const copy = new (producto.constructor as { new (): Producto })();
    Object.assign(copy,producto);
    this.productos.push(copy);
  }

  getProductos():Producto[]{
    return this.productos;
  }

  borrar(){
    this.productos= new Array();
  }
}
