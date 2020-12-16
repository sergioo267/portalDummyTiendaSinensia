import { Categoria } from "./Categoria";
import { Producto } from "./producto";

export class Seguro extends Producto {
    seleccionado!: boolean;

    constructor(nombre: string,
        descripcion: string,
        caracteristicas: string,
        precio: number,
        foto: string,
        asegurable: boolean,
        ean: string,
        categoria:Categoria,

        seleccionado: boolean,
        ) {

        super(nombre, descripcion, caracteristicas, precio, foto, asegurable, ean, categoria);
        this.seleccionado = seleccionado;

    }

}