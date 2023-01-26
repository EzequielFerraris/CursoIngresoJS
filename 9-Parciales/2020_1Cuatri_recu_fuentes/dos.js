
function validarString(str) {

  let i=0;
  let condition = true;

  do{
    let datoI;
    if(i==0) {
      datoI= prompt(`Por favor, ingrese un valor para ${str}.`);
      i++;
    }
    else {
      datoI = prompt(`El dato ingresado es incorrecto. Por favor reingrese un valor para ${str}`);
    };

    let checker = /[^a-zA-Z]/g;

    if(checker.test(datoI)) {
      continue;
    }
 
    if(datoI != "cal" && datoI != "arena" && datoI != "cemento") {
      continue;
    };

    condition= false;
    return datoI;
  }
  while(condition);


};


function validarNum(num, min) {

  let i=0;
  let condition = true;

  do{
    let datoI;
    if(i==0) {
      datoI= prompt(`Por favor, ingrese un valor para ${num}.`);
      i++;
    }
    else {
      datoI = prompt(`El dato ingresado es incorrecto. Por favor reingrese un valor para ${num}`);
    };

    let checker = /[^0-9.]/g;

    if(checker.test(datoI)) {
      continue;
    }
 
    if(num == "el precio") {
      datoI = parseFloat(datoI);
    }
    else {
      datoI = parseInt(datoI);
    };
    

    if(datoI <= min || isNaN(datoI)) {
      continue;
    };

    condition= false;
    return datoI;
  }
  while(condition);

};



function mostrar(){

  let cantidadTotalBolsas = 0;
  let importeBrutoTotal = 0;
  let descuento = 0;
  let importeFinal = 0;

  let tipoMasComprado = "No se ha comprado nada";
  let cantTipoMasComprado = "No se ha comprado nada";
  let cantidadTotalCal = 0;
  let cantidadTotalArena = 0;
  let cantidadTotalCemento = 0;

  let precioMasCaro = 0;
  let tipoMasCaro = "No se ha comprado nada";

  let i = 0;
  let condition = true;
  do{
    let pregunta;
    if(i==0) {
      alert(`Bienvenidx. Aquí podrá ingresar la cantidad de productos a comprar para su construcción`);
      i++;
    }
    else {
      pregunta = prompt(`¿Desea seguir cargando productos? (SI/NO)`);
      if(pregunta != "SI" && pregunta !="Si" && pregunta != "si") {
        condition = false;
        break;
      };
    };

    let productoValidado = validarString("el producto ('cal', 'arena' o 'cemento'");
    let cantBolsasValidada = validarNum("la cantidad de bolsas (número entero mayor a 0)", 0);
    let precioBolsaValidado = validarNum("el precio", 0);

    cantidadTotalBolsas += cantBolsasValidada;
    importeBrutoTotal += cantBolsasValidada * precioBolsaValidado;

    if(i==1) {
      precioMasCaro = precioBolsaValidado;
      tipoMasCaro = productoValidado;
      i++;
    }
    else {
      if(precioMasCaro < precioBolsaValidado) {
        precioMasCaro = precioBolsaValidado;
        tipoMasCaro = productoValidado;
      };
    };

    switch(productoValidado) {
      case "cal":
        cantidadTotalCal += cantBolsasValidada;
        break;
      case "arena":
        cantidadTotalArena += cantBolsasValidada;
        break;
      case "cemento":
        cantidadTotalCemento += cantBolsasValidada;
        break;
    };
  }
  while(condition);

  cantTipoMasComprado = Math.max(cantidadTotalArena, cantidadTotalCal, cantidadTotalCemento);
  if(cantTipoMasComprado == cantidadTotalArena) {
    tipoMasComprado = "arena";
  }
  else if(cantTipoMasComprado == cantidadTotalCal) {
    tipoMasComprado = "cal";
  }
  else {
    tipoMasComprado = "cemento";
  };

  if(cantidadTotalBolsas > 30) {
    descuento = 0.25;
  }
  else if (cantidadTotalBolsas > 10) {
    descuento = 0.15;
  };
  
  importeFinal = (importeBrutoTotal - (importeBrutoTotal * descuento)).toFixed(2);
  
  if(descuento ==0) {
    alert(`El importe final a pagar es de $${importeFinal}. El material más comprado fue ${tipoMasComprado} con ${cantTipoMasComprado} bolsas, y el material más caro comprado fue ${tipoMasCaro} a $${precioMasCaro}`);
  }
  else {
    alert(`El importe bruto a pagar es de $${importeBrutoTotal}. El importe final a pagar, con descuento, es de $${importeFinal}. El material más comprado fue ${tipoMasComprado} con ${cantTipoMasComprado} bolsas, y el material más caro comprado fue ${tipoMasCaro} a ${precioMasCaro}`);
  };
  

};


