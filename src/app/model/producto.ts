export class Producto{
    nombre!:string;
    descripcion!:string;
    caractersiticas!:string;
    precio!:number;
    foto!:string;

    constructor(nombre:string,
                descripcion:string,
                caractersiticas:string,
                precio:number,
                foto:string){
                    this.nombre = nombre;
                    this.descripcion = descripcion;
                    this.caractersiticas = caractersiticas;
                    this.precio = precio;
                    this.foto = foto;

    }
}