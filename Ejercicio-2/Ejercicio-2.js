"use strict"
/*Una empresa llamada Texit se presenta en la consultoría y plantea
confeccionar una página para su sitio web de la empresa, y solicita
que la misma tenga un botón que diga cargar producto, y cada vez
que se le haga clic, podrá cargarse un producto, también se pide un
botón que diga ver productos para poder ver los productos cargados.
El usuario podrá cargar la siguiente información:
a. Código del producto.
b. Nombre del producto.
c. Categoría del producto.
d. Precio del producto.
e. Descripción del producto.*/

let DatosCargados = [];
let contador=0;
let info = '';

const CargarProducto = () =>{
    contador++;
    let codigo=parseInt(prompt(`Por favor ingrese el código del producto N° ${contador}`));
    let nombre = prompt(`Por favor ingrese el nombre del producto N° ${contador}`);
    let categoria = prompt(`Por favor ingrese la categoría del producto N° ${contador}`);
    let precio=parseInt(prompt(`Por favor ingrese el precio del producto N° ${contador}`));
    let descripción = prompt(`Por favor ingrese la descripción del producto N° ${contador}`);

    DatosCargados.push([codigo,nombre,categoria,precio,descripción])
}



const VerProductos = () =>{
    for(let i in DatosCargados){
        info+=`<div class="tarjetaSinImg"> <ul>`
            for(let z in DatosCargados[i]){
                //acá puse "z == X" porque lo que varía es el indice del array i
                if (z == 0){
                    info += `<li><span class="titulo">Código: </span>${DatosCargados[i][z]}</li>`
                }else if (z == 1){
                    info += `<li><span class="titulo">Nombre: </span>${DatosCargados[i][z]}</li>`
                }else if (z == 2){
                    info += `<li><span class="titulo">Categoría: </span>${DatosCargados[i][z]}</li>`
                }else if (z == 3){
                    info += `<li><span class="titulo">Precio: </span> $${DatosCargados[i][z]}</li>`
                }else{
                    info += `<li><span class="titulo">Descripción: </span>${DatosCargados[i][z]}</li>`
                }
                
            }
            info += `</ul> </div>`
        document.getElementById('info').innerHTML = info; 

    }
}




/*
let contador=0;
let info ="";
class producto{
    
    constructor(codigo = 0, nombre = "", categoria = "", precio = 0, descripción = ""){
        this.codigo=codigo;
        this.nombre=nombre;
        this.categoria=categoria;
        this.precio = precio;
        this.descripción = descripción;
    }

    salida(){
        return (info += `<div class="tarjeta"><h2>${this.nombre}</h2>
                        <ul>
                            <li>Código: ${this.codigo}</li>
                            <li>Categoría: ${this.categoria}</li>
                            <li>Precio: $${this.precio}</li>
                            <li>Descripción: ${this.descripción}</li>
                        </ul></div>`);
    }
}


let lapicera = new producto (12345, "Lapicera Bic", "Utiles escolares", 125, "Lapicera Bic trazo fino color azul");
let cartuchera = new producto (45879, "Cartuchera rosa", "Utiles escolares", 569, "Cartuchera rosa de lona");
let papelCarton = new producto (12478, "Papel de cartón", "Papelería", 255, "Block de 50 hojas de cartón");


const CargarProducto = () =>{
    contador++;
    if(contador==1){
        lapicera.salida()
    } else if(contador==2){
        cartuchera.salida()
    }else if(contador==3){
        papelCarton.salida()
    }else{
        console.error("No hay más productos para cargar")}
       
        document.getElementById('info').innerHTML = info; 
}


const VerProductos = () =>{
    if(contador ==0){
        contador=3
    lapicera.salida();
    cartuchera.salida();
    papelCarton.salida()
    document.getElementById('info').innerHTML = info;}
    else if(contador ==1){
        contador=3
        cartuchera.salida();
        papelCarton.salida()
        document.getElementById('info').innerHTML = info;}
    else if(contador ==2){
        contador=3
        papelCarton.salida()
        document.getElementById('info').innerHTML = info;}
    else{
        console.error("No hay más productos para cargar")}

    }
    

*/


