import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { CarritooService } from './carritoo.service';

@Injectable({
  providedIn: 'root'
})
export class CompraProductosService {
  productosComprados!:Producto[];

  constructor() { 
    this.productosComprados = new Array();

  }

  getProductosComprados(){
    return this.productosComprados;
  }

  addProductosComprado(productos:Producto[]){
    for(let i = 0; i < productos.length; i++){
      this.productosComprados.push(productos[i]);

    }
  }
}
