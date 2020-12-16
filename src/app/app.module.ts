import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListadoComponent } from './components/producto-listado/producto-listado.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {PrecioPipe} from './pipes/precio.pipe';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';  
import { ProductoComponent } from './components/producto/producto.component';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductosCompradosComponent } from './components/productos-comprados/productos-comprados.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoListadoComponent,
    ListadoProductosComponent,
    ProductoComponent,
    PrecioPipe,
    HeaderComponent,
    CarritoComponent,
    ProductosCompradosComponent
    
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,

    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatSidenavModule,
    MatSelectModule,
    MatTabsModule,
    
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
