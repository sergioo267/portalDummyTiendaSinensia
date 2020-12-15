import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { CompraProductosService } from 'src/app/services/compra-productos.service';

@Component({
  selector: 'app-productos-comprados',
  templateUrl: './productos-comprados.component.html',
  styleUrls: ['./productos-comprados.component.css']
})
export class ProductosCompradosComponent implements OnInit {
  productos!:Producto[]
  constructor(private productoService:CompraProductosService) { }

  ngOnInit(): void {
    this.productos = this.productoService.getProductosComprados()
  }

}
