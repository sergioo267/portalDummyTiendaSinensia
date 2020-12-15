import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/model/producto';
import { CarritooService } from 'src/app/services/carritoo.service';
import { CompraProductosService } from 'src/app/services/compra-productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos!:Producto[];
  seleccionado= "true";
  show:boolean =false;

  constructor(private carritoServices:CarritooService, private compraServices:CompraProductosService, private router:Router ) { }
  ngOnInit(): void {
    this.productos = this.carritoServices.getProductos();
    if (this.productos.length > 0 ){
      this.show = true;
    }
  }

  comprar(){
    this.compraServices.addProductosComprado(this.productos);
    this.carritoServices.borrar()
    this.router.navigate(["devoluciones-pedidos"])

  }

}
