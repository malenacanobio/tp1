
let televisores = [];
let info = "";
televisores [0] = ["Samgsung", 12345, 3, "televisor-samsung", 150, "Televisor samsung pantalla plana 50'", `<button onclick="Añadir();" class="botonCarrito">Añadir al carrito</button>`];
televisores [1] = ["LG", 85240, 15, "televisor-LG", 48000, "Televisor LG pantalla plana 50'", `<button onclick="Añadir();" class="botonCarrito">Añadir al carrito</button>`];
televisores [2] = ["Philips", 110500, 25, "televisor-philips", 78145, "Televisor Philips pantalla plana 50'", `<button onclick="Añadir();" class="botonCarrito">Añadir al carrito</button>`];
televisores [3] = ["Sony", 254000, 45, "televisor-Sony", 45217, "Televisor Sony pantalla plana 50'", `<button onclick="Añadir();" class="botonCarrito">Añadir al carrito</button>`];
televisores [4] = ["Panasonic", 150000, 58, "televisor-Panasonic", 98860, "Televisor Panasonic pantalla curva 50'", `<button onclick="Añadir();" class="botonCarrito">Añadir al carrito</button>`];
televisores [5] = ["Xiaomi", 155000, 25, "televisor-xiaomi", 44531, "Televisor Xiaomi pantalla curva 50'", `<button onclick="Añadir();" class="botonCarrito">Añadir al carrito</button>`];
televisores [6] = ["Hitachi", 95000, 10, "televisor-hitachi", 88709, "Televisor Hitachi pantalla plana 50'", `<button onclick="Añadir();" class="botonCarrito">Añadir al carrito</button>`];
televisores [7] = ["E - Nova", 95000, 10, "televisor-enova", 103250, "Televisor E-Nova pantalla plana 50'", `<button onclick="Añadir();" class="botonCarrito">Añadir al carrito</button>`];
televisores [8] = ["Philco", 95000, 10, "televisor-philco", 95590, "Televisor Philco pantalla plana 50'", `<button onclick="Añadir();" class="botonCarrito">Añadir al carrito</button>`];

const Mostrar = () =>{
for ( let indice in televisores) {
    info += `<div class="tarjeta">
         <ul>`
        for (let indiceProducto in televisores[indice]){
            if(televisores[indiceProducto][indiceProducto]==0){
                info += `<h2>${televisores[indice][indiceProducto]}<h2>`
            }
            if(televisores[indiceProducto] ==2){
                info += `<h2>${televisores[indice][indiceProducto]}<h2>`
            }
            info += `
            <li>${televisores[indice][indiceProducto]}</li>`
        }
        info += `</ul> </div>`
        document.getElementById('info').innerHTML = info;
    }
}


let tvordenados = [];





/*


    
let primero, segundo, tercero, cuarto,quinto, sexto, septimo, noveno;
//La función "remove" elimina todo lo previo cargado para reordenar en un lienzo limpio

//Primero definimos el menor precio

if (samsung.precio<(LG.precio, philips.precio, sony.precio, panasonic.preci, xiaomi.precio, hitachi.precio, enova.precio,philco.precio)){
    primero = samsung.precio;
    samsung.salida();
    document.getElementById('ordenado').innerHTML = info; 
}else if (LG.precio <(samsung.precio, philips.precio, sony.precio, panasonic.preci, xiaomi.precio, hitachi.precio, enova.precio,philco.precio)){
    primero = LG.precio;
    LG.salida();
    document.getElementById('ordenado').innerHTML = info; 
}else if (sony.precio <(samsung.precio, philips.precio, LG.precio, panasonic.preci, xiaomi.precio, hitachi.precio, enova.precio,philco.precio)){
    primero = sony.precio;
    sony.salida();
    document.getElementById('ordenado').innerHTML = info; 
}else if (panasonic.precio <(samsung.precio, philips.precio, LG.precio, sony.preci, xiaomi.precio, hitachi.precio, enova.precio,philco.precio)){
    primero = panasonic.precio;
    panasonic.salida();
    document.getElementById('ordenado').innerHTML = info; 
}else if (xiaomi.precio <(samsung.precio, philips.precio, LG.precio, sony.preci, panasonic.precio, hitachi.precio, enova.precio,philco.precio)){
    primero = xiaomi.precio;
    xiaomi.salida();
    document.getElementById('ordenado').innerHTML = info; 
}else if (hitachi.precio <(samsung.precio, philips.precio, LG.precio, sony.preci, panasonic.precio, xiaomi.precio, enova.precio,philco.precio)){
    primero = hitachi.precio;
    hitachi.salida();
    document.getElementById('ordenado').innerHTML = info; 
}else if (enova.precio <(samsung.precio, philips.precio, LG.precio, sony.preci, panasonic.precio, xiaomi.precio, hitachi.precio,philco.precio)){
    primero = enova.precio;
    enova.salida();
    document.getElementById('ordenado').innerHTML = info; 
}else{
    primero = philco.precio;
    primero.salida();
    document.getElementById('ordenado').innerHTML = info; 
}


//Definimos el segundo
/*
Si 1 != a && 9 != a{
a=2
}

Si b < 2 (b=2)*/
/*
if (primero != samsung.precio && noveno != samsung.precio){
    segundo=samsung.precio
}
if(primero != LG.precio && noveno != LG.precio){
    if(LG.precio<=segundo){
        segundo = LG.precio
    }   
}

if(primero != philips.precio && noveno != philips.precio){
    if(LG.precio<=segundo){
        segundo = LG.precio
    }   
}


if(primero != sony.precio && noveno != sony.precio){
    if(sony.precio<=segundo){
        segundo = sony.precio
    }   
}









//Definimos el mayor precio
if (primero < samsung.precio && samsung.precio>(LG.precio, philips.precio, sony.precio, panasonic.preci, xiaomi.precio, hitachi.precio, enova.precio,philco.precio)){
noveno = samsung.precio;
samsung.salida();
document.getElementById('ordenado').innerHTML = info; 
}else if (primero < LG.precio && LG.precio >(samsung.precio, philips.precio, sony.precio, panasonic.preci, xiaomi.precio, hitachi.precio, enova.precio,philco.precio)){
noveno = LG.precio;
LG.salida();
document.getElementById('ordenado').innerHTML = info; 
}else if (primero < sony.precio && sony.precio >(samsung.precio, philips.precio, LG.precio, panasonic.preci, xiaomi.precio, hitachi.precio, enova.precio,philco.precio)){
noveno = sony.precio;
sony.salida();
document.getElementById('ordenado').innerHTML = info; 
}else if (primero < panasonic.precio && panasonic.precio >(samsung.precio, philips.precio, LG.precio, sony.preci, xiaomi.precio, hitachi.precio, enova.precio,philco.precio)){
noveno = panasonic.precio;
panasonic.salida();
document.getElementById('ordenado').innerHTML = info; 
}else if (primero < xiaomi.precio && xiaomi.precio >(samsung.precio, philips.precio, LG.precio, sony.preci, panasonic.precio, hitachi.precio, enova.precio,philco.precio)){
noveno = xiaomi.precio;
xiaomi.salida();
document.getElementById('ordenado').innerHTML = info; 
}else if (primero < hitachi.precio && hitachi.precio >(samsung.precio, philips.precio, LG.precio, sony.preci, panasonic.precio, xiaomi.precio, enova.precio,philco.precio)){
noveno = hitachi.precio;
hitachi.salida();
document.getElementById('ordenado').innerHTML = info; 
}else if (primero < enova.precio && enova.precio >(samsung.precio, philips.precio, LG.precio, sony.preci, panasonic.precio, xiaomi.precio, hitachi.precio,philco.precio)){
noveno = enova.precio;
enova.salida();
document.getElementById('ordenado').innerHTML = info; 
}else{
noveno = philco.precio;
philco.salida();
document.getElementById('ordenado').innerHTML = info; 
}