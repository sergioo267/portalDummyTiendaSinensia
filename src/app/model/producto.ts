import { Categoria } from "./Categoria";


export class Producto {
    nombre!: string;
    descripcion!: string;
    caracteristicas!: string;
    precio!: number;
    foto!: string;
    asegurable!: boolean;
    ean!: string;
    categoria!:Categoria;

    constructor(nombre: string,
        descripcion: string,
        caracteristicas: string,
        precio: number,
        foto: string,
        asegurable: boolean,
        ean: string,
        categoria: Categoria) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.caracteristicas = caracteristicas;
        this.precio = precio;
        this.foto = foto;
        this.asegurable = asegurable;
        this.ean = ean;
        this.categoria = categoria;
        
    }
    
}


