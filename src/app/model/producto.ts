export class Producto{
    nombre!:string;
    descripcion!:string;
    caractersiticas!:string;
    precio!:number;
    foto!:string;
    asegurable!:boolean;
    id!:number;

    constructor(nombre:string,
                descripcion:string,
                caractersiticas:string,
                precio:number,
                foto:string,
                asegurable:boolean,
                id:number){
                    this.nombre = nombre;
                    this.descripcion = descripcion;
                    this.caractersiticas = caractersiticas;
                    this.precio = precio;
                    this.foto = foto;
                    this.asegurable = asegurable;
                    this.id = id;

    }
}