import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos:Producto[];
  producto!:Producto;

  constructor(private activatedroute:ActivatedRoute) {
    this.productos = [new Producto("Cecotec ProClean 5110 Inox Microondas con Grill 700W",
    "El microondas ProClean 5110 Inox hará que destaques en tu cocina gracias a su amplia cantidad de modos y funciones. Envuelve completamente alimentos con el sistema de ondas altamente eficiente 3DWave, descongela y permite calentar cualquier elaboración, todo ello de la forma más fácil e intuitiva.",
    "Microondas de acero inoxidable de 20 l de capacidad\nDiseño elegante con frontal y tirador de acero inoxidable.\nInterior con revestimiento Ready2Clean, más fácil de limpiar, repele la suciedad.\nTecnología 3DWave con un sistema de ondas altamente eficiente que envuelve al 100 % los alimentos.\n8 programas predeterminados para diferentes alimentos.\nPantalla LED con reloj que muestra el tiempo de cocinado y la hora.\n700 W en 5 niveles de potencia.\nGrill de 800 W con resistencias halógenas más eficientes.\nModo de descongelación que se adapta a todos los alimentos.\nInicio automático: programa el microondas para que se ponga en marcha a la hora de comer.\nTemporizador hasta 60 minutos con avisador acústico de final de cocción.\nSeguro infantil para proteger a los más pequeños.",
    80,
    "assets/imagenes/microhondas.jpg",
    true,
    1),

    new Producto("Rowenta RO3753EA Compact Power Cyclonic Aspirador Ciclónico",
    "Te presentamos este fantástico aspirador ciclónico de Rowenta de alto rendimiento con el que podrás aspirar cualquier superficie de tu hogar teniendo un entorno limpio y libre de polvo. Gracias a sus niveles de filtración de aire, podrás aspirar con la mayor eficiencia sin bolsas gracias a su depósito de 1.5 litros. Gracias a sus ruedas y su asa ergonómica, dispone de un fácil transporte y podrás usarlo sin apenas esfuerzo.",
    "Especificaciones:\nEtiqueta energética ACAA, alto rendimiento\nNivel sonoro: 79 dB(A)\n2 niveles de filtración: Filtro de alta eficiencia + foam \nSistema ciclónico avanzado de la separación del aire y la suciedad \nSistema de vaciado fácil para una mayor comodidad al vaciar el depósito \nCapacidad depósito: 1.5L\nTubo metálico telescópico y ergonómico \nCepillo Easy Brush 2 en 1 integrado\nCepillo parquet\nBoquilla con dos posiciones para diferentes suelos\nBoquilla 2 en 1: ranuras convertible en cepillo.\n2x ruedas grandes para una mejor movilidad\nPosición parking para poder guardarlo en cualquier lugar\nAsa ergonómica \nLongitud del cable: 8,7m",80,
    "assets/imagenes/aspiradora.jpg",
    true,
    2),

    new Producto("Tefal Chef Inducción Set 2 Sartenes Antiadherentes 22/28cm",
    "Las sartenes antiadherentes de Chef's delight, diseñadas para los amantes de la cocina, son el mejor compañero de cocina diaria, gracias a su recubrimiento Titanium Pro que dura hasta dos veces más. Con las sartenes de cocina de Chef para el deleite, la cocina se convierte en un verdadero placer todos los días.",
    "El recubrimiento Titanium Pro que dura hasta 2 veces más. El recubrimiento antiadherente de alta calidad ofrece una mayor duración y resistencia gracias a una capa mineral ultrarreforzada y un recubrimiento protector mejorado con partículas de titanio.\nLa tecnología exclusiva Thermospot® indica la temperatura perfecta para empezar a cocinar platos deliciosos.\nCómoda manipulación para un manejo fácil.\nSin salpicaduras. Su forma profunda garantiza una cocción más ordenada sin que se peguen los ingredientes y evita salpicaduras y derrames en su placa.\nExterior antiadherente fácil de limpiar.\nApta para todo tipo de cocinas, incluidas las de inducción.\nCocina sano, piensa en el medio ambiente. Nuestro objetivo es fabricar productos duraderos que puedan usarse durante años, al mismo tiempo que respetamos la salud de nuestro planeta mediante el uso de productos reciclables con revestimientos antiadherentes seguros (sin PFOA, plomo ni cadmio).",
    34.99,
    "assets/imagenes/sarten.jpg",
    true,
    3),

    new Producto("Cecotec ProClean 5110 Inox Microondas con Grill 700W",
    "El microondas ProClean 5110 Inox hará que destaques en tu cocina gracias a su amplia cantidad de modos y funciones. Envuelve completamente alimentos con el sistema de ondas altamente eficiente 3DWave, descongela y permite calentar cualquier elaboración, todo ello de la forma más fácil e intuitiva.",
    "Microondas de acero inoxidable de 20 l de capacidad\nDiseño elegante con frontal y tirador de acero inoxidable.\nInterior con revestimiento Ready2Clean, más fácil de limpiar, repele la suciedad.\nTecnología 3DWave con un sistema de ondas altamente eficiente que envuelve al 100 % los alimentos.\n8 programas predeterminados para diferentes alimentos.\nPantalla LED con reloj que muestra el tiempo de cocinado y la hora.\n700 W en 5 niveles de potencia.\nGrill de 800 W con resistencias halógenas más eficientes.\nModo de descongelación que se adapta a todos los alimentos.\nInicio automático: programa el microondas para que se ponga en marcha a la hora de comer.\nTemporizador hasta 60 minutos con avisador acústico de final de cocción.\nSeguro infantil para proteger a los más pequeños.",
    80,
    "assets/imagenes/microhondas.jpg",
    true,
    4),

    new Producto("Cecotec ProClean 5110 Inox Microondas con Grill 700W",
    "El microondas ProClean 5110 Inox hará que destaques en tu cocina gracias a su amplia cantidad de modos y funciones. Envuelve completamente alimentos con el sistema de ondas altamente eficiente 3DWave, descongela y permite calentar cualquier elaboración, todo ello de la forma más fácil e intuitiva.",
    "Microondas de acero inoxidable de 20 l de capacidad\nDiseño elegante con frontal y tirador de acero inoxidable.\nInterior con revestimiento Ready2Clean, más fácil de limpiar, repele la suciedad.\nTecnología 3DWave con un sistema de ondas altamente eficiente que envuelve al 100 % los alimentos.\n8 programas predeterminados para diferentes alimentos.\nPantalla LED con reloj que muestra el tiempo de cocinado y la hora.\n700 W en 5 niveles de potencia.\nGrill de 800 W con resistencias halógenas más eficientes.\nModo de descongelación que se adapta a todos los alimentos.\nInicio automático: programa el microondas para que se ponga en marcha a la hora de comer.\nTemporizador hasta 60 minutos con avisador acústico de final de cocción.\nSeguro infantil para proteger a los más pequeños.",
    80,
    "assets/imagenes/microhondas.jpg",
    true,
    5), 
  ]
  }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe( paramMap => {
      let productId = Number(paramMap.get('id'));
      console.log(productId);
      this.findProduct(productId);
    })
  }

  findProduct(id:number){
    for (let i = 0; i < this.productos.length; i++) {
      if(this.productos[i].id == id){
        this.producto = this.productos[i];
        console.log(this.producto);
        return;
      }
    }
  }
}
