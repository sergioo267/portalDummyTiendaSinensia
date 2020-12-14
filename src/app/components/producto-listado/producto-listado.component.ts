import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'producto-listado',
  templateUrl: './producto-listado.component.html',
  styleUrls: ['./producto-listado.component.css']
})
export class ProductoListadoComponent implements OnInit {
  @Input() producto!:Producto;
  
  constructor(private router:Router ) { }

  ngOnInit(): void {
    
  }

  goToProductComponent(): void {
    this.router.navigate(['producto'], {state: {producto: this.producto}});
  }
}
