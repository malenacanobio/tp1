"use strict";

/*Una empresa llamada Roliplus se presenta en la c y plantea
confeccionar una página web para su empresa y solicita que el
usuario pueda realizar clic en un botón que diga ver productos, y
muestre al menos 9 productos, los mismos deberán mostrar en forma
de lista los siguientes datos:
a. Nombre del producto.
b. Imagen del producto.
c. Precio del producto.
Las imágenes tiene que poder ser clicleables por el usuario, y al
mismo tiempo, pide que cada uno de los productos tenga formato de
tarjeta, color de fondo #252273 y el color del contenido tiene que ser
#66B1F2. Cuando el usuario se posicione encima tiene que cambiar
el color del fondo y el contenido, invirtiendo los colores propuestos.*/


//Creo los objetos dentro de la posición asociativa producto, con sus distintas propiedades



// Creación de la matriz:
let Producto = [
    // 0                                                                1           2

    ["Las tres Marías",             "funda-caras.jpg", 542,],
    ["Primavera",                   "funda-primavera.jpg", 458,],
    ["Margarita",              "funda-margarita.jpg", 365],
    ["Naturaleza.",                      "funda-naturaleza.jpg", 165],
    ["De otro planeta",                    "funda-de-otro-planeta.jpg", 451],
    ["Amor psicodelico",                           "funda-amor-psicodelico.jpg",365],
    ["Compañeros",           "funda-compañeros.jpg", 854],
    ["Retro",                   "funda-retro.jpg", 75],
    ["Im Okay", "funda-im-ok.jpg", 102],
];




let info = '';

const Mostrar = () =>{
    for (let indiceProducto in Producto) {
      //  info += `<p>Producto ${indiceProducto}:</p>`;
        info += '<ul class="tarjetas">';
        for (let indiceDato in Producto[indiceProducto]) {
            if(indiceDato == 0){ info += `<li><h2>${Producto[indiceProducto][indiceDato]}<h2></li>`;}
            else if (indiceDato == 1) {
                info += `<li><a href="#"><img src="img/${Producto[indiceProducto][indiceDato]}" /></a></li>`;
            } else {
                info += `<li><span class="subtitulo">Precio: </span> $${Producto[indiceProducto][indiceDato]}</li>`;
            }
        }
        info += '</ul>';
    }
    document.getElementById('info').innerHTML = info;
}