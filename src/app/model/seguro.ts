import { Producto } from "./producto";

export class Seguro extends Producto {
    seleccionado!: boolean;

    constructor(nombre: string,
        descripcion: string,
        caracteristicas: string,
        precio: number,
        foto: string,
        asegurable: boolean,
        id: number,
        seleccionado: boolean) {
        super(nombre, descripcion, caracteristicas, precio, foto, asegurable, id);
        this.seleccionado = seleccionado;

    }

}