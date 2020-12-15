export class Producto {
    nombre!: string;
    descripcion!: string;
    caracteristicas!: string;
    precio!: number;
    foto!: string;
    asegurable!: boolean;
    id!: number;

    constructor(nombre: string,
        descripcion: string,
        caracteristicas: string,
        precio: number,
        foto: string,
        asegurable: boolean,
        id: number) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.caracteristicas = caracteristicas;
        this.precio = precio;
        this.foto = foto;
        this.asegurable = asegurable;
        this.id = id;

    }
    
}