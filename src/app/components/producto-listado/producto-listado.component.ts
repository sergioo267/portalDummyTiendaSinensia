import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'producto-listado',
  templateUrl: './producto-listado.component.html',
  styleUrls: ['./producto-listado.component.css']
})
export class ProductoListadoComponent implements OnInit {
  @Input() producto!:Producto;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
