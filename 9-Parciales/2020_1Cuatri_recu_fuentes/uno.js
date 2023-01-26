function validarNumero(num, min, max) {
    let i = 0;
    let condition = true;
    do {
        let datoI;
        if(i==0) {
            datoI = prompt(`Por favor, ingrese un dato para ${num}. Debe ser entre ${min} y ${max}`);
            i++;
        }
        else {
            datoI = prompt(`El dato ingresado es incorrecto. Intente nuevamente. Debe ser entre ${min} y ${max}`);
        };

        let checker = /[^0-9.]/g;

        if(checker.test(datoI)) {
            continue;
        };

        datoI = parseFloat(datoI);

        if(datoI < min || datoI > max || isNaN(datoI)) {
            continue;
        };

        if(num == "la cantidad" && datoI == min) {
            continue;
        };

        condition = false;
        return datoI;

    }
    while(condition);
};

function validarStr(str) {
    let i = 0;
    let condition = true;
    do {
        let datoI;
        if(i==0) {
            if(str == "el producto") {
                datoI = prompt(`Por favor, ingrese un dato para ${str}. Puede ser "barbijo", "alcohol" o "jabón".`);
                i++;
            } else {
                datoI =prompt(`Por favor, ingrese un dato para ${str}. Solo debe contener letras`);
                i++;
            };
        }
        else {
            if(str == "el producto") {
                datoI = prompt(`El dato ingresado es incorrecto. Intente nuevamente. Puede ser "barbijo", "alcohol" o "jabón".`);
            } else {
                datoI = prompt(`El dato ingresado es incorrecto. Intente nuevamente. Solo debe contener letras`);
            };
        };

    let checker = /[^a-zA-Záéíóú]/gi;
    
    if(checker.test(datoI)) {
        continue;
    };

    if(typeof datoI != "string" || datoI.length <=1) {
        continue;
    };

    if(str == "el producto" && datoI != "barbijo" && datoI != "alcohol" && datoI != "jabón") {
        continue;
    };

    condition = false;
    return datoI;
    }
    while(condition);
}

function mostrar(){	
	
    let precioJabonCaro = "No se ha comprado jabón";
    let cantidadJabonCaro = 0;
    let fabricanteJabonCaro = "nadie";
    
    let totalAlcohol = 0;
    let totalJabon = 0;
    let totalBarbijos = 0;
    let vecesJabon = 0;
    let vecesBarbijos = 0;
    let vecesAlcohol = 0;

    let productoMasComprado;
    let cantidadProductoMasComprado;
    let cantVecesProductoMasComprado;
    

    for(let i=0; i <5; i++) {

        let productoValidado = validarStr("el producto");
        let precioValidado = validarNumero("el precio", 100, 300);
        let cantidadValidada = validarNumero("la cantidad", 0, 1000);
        let marcaValidada = validarStr("la marca");
        let fabricanteValidado = validarStr("el fabricante");

        switch(productoValidado) {
            case "barbijo":
                totalBarbijos += cantidadValidada;
                vecesBarbijos++;
                break;
            case "alcohol":
                totalAlcohol += cantidadValidada;
                vecesAlcohol++;
                break;
            case "jabón":
                totalJabon += cantidadValidada;
                vecesJabon++;
                if(typeof precioJabonCaro == "string") {
                    precioJabonCaro = precioValidado;
                    cantidadJabonCaro = cantidadValidada;
                    fabricanteJabonCaro = fabricanteValidado;
                }
                else if (precioJabonCaro < precioValidado){
                    precioJabonCaro = precioValidado;
                    cantidadJabonCaro = cantidadValidada;
                    fabricanteJabonCaro = fabricanteValidado;
                };
                break;
        };

    };
    
    cantidadProductoMasComprado = Math.max(totalAlcohol, totalBarbijos, totalJabon);

    if(cantidadProductoMasComprado == totalAlcohol) {
        productoMasComprado = "alcohol";
        cantidadProductoMasComprado = totalAlcohol;
        cantVecesProductoMasComprado = vecesAlcohol;
    } 
    else if (cantidadProductoMasComprado == totalBarbijos) {
        productoMasComprado = "barbijos";
        cantidadProductoMasComprado = totalBarbijos;
        cantVecesProductoMasComprado = vecesBarbijos;
    }
    else {
        productoMasComprado = "jabón";
        cantidadProductoMasComprado = totalJabon;
        cantVecesProductoMasComprado = vecesJabon;

    };

    promedioProdMasComprado = (cantidadProductoMasComprado / cantVecesProductoMasComprado).toFixed(2);
  
    alert(`La cantidad de jabón más caro fue de ${cantidadJabonCaro} y su fabricante es ${fabricanteJabonCaro}. El producto más comprado fue ${productoMasComprado}, y en promedio se compraron ${promedioProdMasComprado} por compra. Se compraron ${totalBarbijos} barbijos en total.`);

};

