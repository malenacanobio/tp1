"use strict";

/*Una empresa llamada Noblex se presenta en la consultoría y plantea
confeccionar una página para su sitio web de la empresa, solicita que
haya un botón que diga ver televisores y permita mostrar al menos 9
televisores de 50 pulgadas y que muestre:
a. Código del producto.
b. Cantidad de televisores en stock.
c. Foto del producto.
d. Precio del producto.
e. Descripción del producto.
f. Botón de añadir al carrito.
Se pide también un botón que diga ordenar y que muestre los
televisores del menor precio al mayor precio.*/



let ordenado ="";
let info ="";
let banderaMostrar = false;
let contador=0;
let banderaOrdenar = false;

class televisor{
    
    constructor(codigo = 0, stock=0, foto, precio=0, descripción ="", añadir=""){
        this.codigo=codigo;
        this.stock=stock
        this.foto=foto;
        this.precio=precio;
        this.descripción = descripción;
        this.añadir =  `<button onclick="Añadir();" class="botonCarrito">Añadir al carrito</button>`
    }

    salida(){
        return (info += `<div class="tarjeta">
                        <img src="img/${this.foto}.jpg" alt="Foto del producto ${this.codigo}">
                        <ul>
                            <li><span class="titulo">Código:</span> ${this.codigo}</li>
                            <li><span class="titulo">Disponibilidad de Stock:</span> ${this.stock}</li>
                            <li><span class="titulo">Precio:</span> $${this.precio}</li>
                            <li><span class="titulo">Descripción:</span> ${this.descripción}</li>
                        </ul>
                        ${this.añadir}</div>`);
    }
}

let samsung = new televisor(12345, 3, "televisor-samsung", 15000, "Televisor samsung pantalla plana 50'");  //               9
let LG = new televisor(85240, 15, "televisor-LG", 48000, "Televisor LG pantalla plana 50'");    //                           3
let philips = new televisor(110500, 25, "televisor-philips", 95000, "Televisor Philips pantalla plana 50'");    //           6
let sony = new televisor(254000, 45, "televisor-Sony", 45217, "Televisor Sony pantalla plana 50'"); //                       2
let panasonic = new televisor (150000, 58, "televisor-Panasonic", 98860, "Televisor Panasonic pantalla curva 50'"); //       7
let xiaomi = new televisor(155000, 25, "televisor-xiaomi", 57531, "Televisor Xiaomi pantalla curva 50'");   //               4
let hitachi = new televisor(95000, 10, "televisor-hitachi", 88709, "Televisor Hitachi pantalla plana 50'"); //               5
let enova = new televisor(45872, 15, "televisor-enova", 103250, "Televisor E-Nova pantalla plana 50'"); //                   8
let philco = new televisor(95450, 21, "televisor-philco", 3, "Televisor Philco pantalla plana 50'");    //                   1

const Mostrar = () =>{
    if(banderaMostrar == false){ 
    samsung.salida();
    LG.salida();
    philips.salida();
    sony.salida();
    panasonic.salida();
    xiaomi.salida();
    hitachi.salida();
    enova.salida();
    philco.salida();
    document.getElementById('info').innerHTML = info; 
    banderaMostrar = true;
    }else{
        banderaOrdenar = true;
        console.error("Ya se cargaron los archivos")
    }


}


const Ordenar = () =>{
                            //el documento... agarra el elemento que escribimos por ID, el remove lo elimina. Hago esto para poder reescribir en un lienzo en blanco.
    if (banderaMostrar == true && banderaOrdenar == false) {
    philco.salida();    //                   1
    sony.salida();    //                     2
    LG.salida();    //                  3
    xiaomi.salida();    //                     4
    hitachi.salida();    //                5
    philips.salida();    //                   6
    panasonic.salida();    //                  7
    enova.salida();    //                    8
    samsung.salida();    //                   9
    document.getElementById('ordenado').innerHTML = ordenado;
    banderaOrdenar = true;
    
    }
     
    else{ 
        console.error("No hay información cargada.");
    }

    }

const Añadir = () =>{
    contador++;
    document.getElementById('contadorCarrito').innerHTML = `${contador}`; 
}