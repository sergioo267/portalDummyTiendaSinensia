export class Producto{
    nombre!:string;
    descripcion!:string;
    caractersiticas!:string;
    precio!:number;
    foto!:string;
    asegurable!:boolean;

    constructor(nombre:string,
                descripcion:string,
                caractersiticas:string,
                precio:number,
                foto:string,
                asegurable:boolean){
                    this.nombre = nombre;
                    this.descripcion = descripcion;
                    this.caractersiticas = caractersiticas;
                    this.precio = precio;
                    this.foto = foto;
                    this.asegurable = asegurable;

    }
}