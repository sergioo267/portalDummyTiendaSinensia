import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/model/producto';
import { Seguro } from 'src/app/model/seguro';
import { CarritooService } from 'src/app/services/carritoo.service';
import { CompraProductosService } from 'src/app/services/compra-productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit , OnChanges{
  productos!:Producto[];
  seleccionado= "true";
  show:boolean =false;
  seguros:Seguro[] = new Array();
  compra!:boolean;
  compraFinalizada:boolean = false;
  codigoTienda:number = 28832;
  constructor(private carritoServices:CarritooService, private compraServices:CompraProductosService, private router:Router ) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(this.compraFinalizada == true){
      this.compraServices.addProductosComprado(this.productos);
      this.carritoServices.borrar();
      this.router.navigate(["devoluciones-pedidos"])
    }
  }

  comprado(valor:any){
    console.log("fsdfs")
    this.compraFinalizada = true;
  }


  ngOnInit(): void {
    this.productos = this.carritoServices.getProductos();
    if (this.productos.length > 0 ){
      this.show = true;
    }
    console.log(this.productos)
    this.productos.forEach(element=> {
      if( element instanceof Producto){

      }else{
        this.seguros.push(element)
      }
    })
  }

  comprar(){
    this.compra = true;

    // this.compraServices.addProductosComprado(this.productos);
    // this.carritoServices.borrar();
    // this.router.navigate(["devoluciones-pedidos"])

  }



}
