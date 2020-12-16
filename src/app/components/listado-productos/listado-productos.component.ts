import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {
  productos!:Producto[];
  innerWidth!:number;
  numeroColumnas:number = 1;
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth>1000){
      this.numeroColumnas = 4;
    }else {
      this.numeroColumnas = 1
    }
    this.productos = [new Producto("Cecotec ProClean 5110 Inox Microondas con Grill 700W",
      "El microondas ProClean 5110 Inox hará que destaques en tu cocina gracias a su amplia cantidad de modos y funciones. Envuelve completamente alimentos con el sistema de ondas altamente eficiente 3DWave, descongela y permite calentar cualquier elaboración, todo ello de la forma más fácil e intuitiva.",
      "Microondas de acero inoxidable de 20 l de capacidad\nDiseño elegante con frontal y tirador de acero inoxidable.\nInterior con revestimiento Ready2Clean, más fácil de limpiar, repele la suciedad.\nTecnología 3DWave con un sistema de ondas altamente eficiente que envuelve al 100 % los alimentos.\n8 programas predeterminados para diferentes alimentos.\nPantalla LED con reloj que muestra el tiempo de cocinado y la hora.\n700 W en 5 niveles de potencia.\nGrill de 800 W con resistencias halógenas más eficientes.\nModo de descongelación que se adapta a todos los alimentos.\nInicio automático: programa el microondas para que se ponga en marcha a la hora de comer.\nTemporizador hasta 60 minutos con avisador acústico de final de cocción.\nSeguro infantil para proteger a los más pequeños.",
      84.91,
      "assets/imagenes/microhondas.jpg",
      true,
      "SADFGWRSSGSS",
      new Categoria("Otros", "Otros")),

    new Producto("Rowenta RO3753EA Compact Power Cyclonic Aspirador Ciclónico",
      "Te presentamos este fantástico aspirador ciclónico de Rowenta de alto rendimiento con el que podrás aspirar cualquier superficie de tu hogar teniendo un entorno limpio y libre de polvo. Gracias a sus niveles de filtración de aire, podrás aspirar con la mayor eficiencia sin bolsas gracias a su depósito de 1.5 litros. Gracias a sus ruedas y su asa ergonómica, dispone de un fácil transporte y podrás usarlo sin apenas esfuerzo.",
      "Especificaciones:\nEtiqueta energética ACAA, alto rendimiento\nNivel sonoro: 79 dB(A)\n2 niveles de filtración: Filtro de alta eficiencia + foam \nSistema ciclónico avanzado de la separación del aire y la suciedad \nSistema de vaciado fácil para una mayor comodidad al vaciar el depósito \nCapacidad depósito: 1.5L\nTubo metálico telescópico y ergonómico \nCepillo Easy Brush 2 en 1 integrado\nCepillo parquet\nBoquilla con dos posiciones para diferentes suelos\nBoquilla 2 en 1: ranuras convertible en cepillo.\n2x ruedas grandes para una mejor movilidad\nPosición parking para poder guardarlo en cualquier lugar\nAsa ergonómica \nLongitud del cable: 8,7m",
      58.80,
      "assets/imagenes/aspiradora.jpg",
      true,
      "6ERYU67REWRE",
      new Categoria("Electrodomesticos", "aspiradoras")),

    new Producto("Tefal Chef Inducción Set 2 Sartenes Antiadherentes 22/28cm",
      "Las sartenes antiadherentes de Chef's delight, diseñadas para los amantes de la cocina, son el mejor compañero de cocina diaria, gracias a su recubrimiento Titanium Pro que dura hasta dos veces más. Con las sartenes de cocina de Chef para el deleite, la cocina se convierte en un verdadero placer todos los días.",
      "El recubrimiento Titanium Pro que dura hasta 2 veces más. El recubrimiento antiadherente de alta calidad ofrece una mayor duración y resistencia gracias a una capa mineral ultrarreforzada y un recubrimiento protector mejorado con partículas de titanio.\nLa tecnología exclusiva Thermospot® indica la temperatura perfecta para empezar a cocinar platos deliciosos.\nCómoda manipulación para un manejo fácil.\nSin salpicaduras. Su forma profunda garantiza una cocción más ordenada sin que se peguen los ingredientes y evita salpicaduras y derrames en su placa.\nExterior antiadherente fácil de limpiar.\nApta para todo tipo de cocinas, incluidas las de inducción.\nCocina sano, piensa en el medio ambiente. Nuestro objetivo es fabricar productos duraderos que puedan usarse durante años, al mismo tiempo que respetamos la salud de nuestro planeta mediante el uso de productos reciclables con revestimientos antiadherentes seguros (sin PFOA, plomo ni cadmio).",
      34.99,
      "assets/imagenes/sarten.jpg",
      true,
      "B08DSFODSFD",
      new Categoria("Otros", "Otros")),

    new Producto("HKoenig FGX480 Mini Nevera 46L A+ Blanco",
      "Esta nevera de frío estático de 51 cm de altura y capacidad de 46L, integra un compartimento para cubitos de 4L. Además gracias a su termostato ajustable podrás elegir la temperatura de almacenamiento.",
      "Color: Blanco\nCapacidad: 46L\nCompartimento de cubitos: 4L\nAltura: 51 cm\nRefrigeramiento: Estático\nPuerta reversible: Si\nDimensiones del producto: 45.5 x 44.6 x 51.2 cm\nDimensiones del paquete: 49 x 47 x 52.5 cm\nPeso del paquete: 15 Kg",
      109.99,
      "assets/imagenes/nevera.jpg",
      true,
      "B08M3DK38K",
      new Categoria("Electrodomesticos", "refrigeradores")),

    new Producto("Tristar RK-6132 Arrocera Digital y Multicooker 1.5L 500W ",
      "¿En ocasiones tiene poco tiempo para poner sobre la mesa una comida saludable para su familia? Si es así, la Tristar RK-6132 es sin duda la solución que necesita. Gracias a esta arrocera y multicooker, el arroz siempre saldrá bueno y podrá cocinar de un modo versátil. Además de arroz, podrá preparar pasteles, sopa, yogurt, platos al vapor y otras comidas deliciosas. De este modo, preparará platos saludables para su familia sin preocuparse por ellos.",
      "Exterior en acero inoxidable con luces indicadoras y patas antideslizantes.\nCapacidad de 1,5 l y 500 W.\nRecipiente interior extraíble con un revestimiento antiadherente.\nProtección contra ebullición en seco y función para mantener el calor (70-75ºC).\nIncluye cuchara, medidor y espátula para que pueda empezar enseguida.\n¿Qué incluye la caja? Arrocera y multicooker, cuchara, vaso medidor, espátula, manual",
      53.68,
      "assets/imagenes/arrocera.jpg",
      true,
      "HYDF67FSDJ",
      new Categoria("Utensilios", "gadgets")),
    ]
  }

}
