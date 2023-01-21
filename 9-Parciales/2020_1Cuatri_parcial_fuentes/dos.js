
//FUNCIÓN PARA VALIDAR EL MATERIAL
function validarMaterial() {
  let condition= true;
  let j = 0;
  
  do {
    let materialI;
    if(j==0) {
      materialI= prompt("Por favor, ingrese el material a comprar:");
      j++;
    }
    else {
      materialI= prompt("El material ingresado no es un material válido. Intentelo nuevamente:");
    };

    if(materialI != "cal" && materialI != "arena" && materialI != "cemento") {
      continue;
    };
    condition = false;
    return materialI;
  }
  while(condition);
};

//FUNCIÓN PARA VALIDAR LA CANTIDAD
function validarBolsas() {
  let condition= true;
  let j = 0;
  
  do {
    let bolsasI;
    if(j==0) {
      bolsasI= prompt("Por favor, ingrese la cantidad de bolsas a comprar:");
      j++;
    }
    else {
      bolsasI= prompt("No se ha ingresado una cantidad válida. Intentelo nuevamente:");
    };
    //Reg Exp que encaja con cualquier caracter que no sea un número 
    let checker = new RegExp("[^0-9]");
    //SI INGRESA UN CARACTER NO NUMÉRICO, VUELVE A EMPEZAR EL LOOP
    
    if(checker.test(bolsasI)) {
      continue;
    };

    bolsasI = parseInt(bolsasI);
    console.log(bolsasI);
    if(isNaN(bolsasI) || bolsasI <= 0){
      continue;
    };

    condition = false;
    return bolsasI;
  }
  while(condition);
};

//FUNCIÓN PARA VALIDAR EL PRECIO

function validarPrecio() {
  let condition= true;
  let j = 0;

  do {
    let precioI;
    if(j==0) {
      precioI= prompt("Por favor, ingrese el precio por bolsa del producto:");
      j++;
    }
    else {
      precioI= prompt("No se ha ingresado un precio válido. Intentelo nuevamente:");
    };
    //Reg Exp que encaja con cualquier caracter que no sea un número 
    let checker = new RegExp("[^0-9.]");
    //SI INGRESA UN CARACTER NO NUMÉRICO, VUELVE A EMPEZAR EL LOOP
    if(checker.test(precioI)) {
      continue;
    };
    precioI = parseFloat(precioI);
    if(precioI <=0 || isNaN(precioI)) {
      continue;
    }
    condition = false;
    return precioI;
    
  }
  while(condition);
};

function mostrar() {

  let cantidadDeBolsasCemento = 0;
  let cantidadDeBolsasCal = 0;
  let canitdadDeBolsasArena = 0;
  let materialMasCaro;
  let precioPorBolsaMasCaro = 0;
  let totalCostoBruto = 0;
  let totalConDescuento;
  let descuento = 0;
  let materialMasComprado;

  let continuar = true;
  let i=0;
  do {

    if(i==0) {
      alert("Bienvenido! Con este programa usted podrá ingresar los materiales que desea comprar.")
      i++;
    }
    else {
      let pregunta = prompt("¿Desea seguir cargando materiales? (Si/No)");
      if(pregunta != "Si" && pregunta != "si") {
        continuar = false;
        break;
      };
    };

    let materialValidado = validarMaterial();
    let bolsasValidadas = validarBolsas();
    let precioValidado = validarPrecio();

    switch(materialValidado) {
      case "arena":
        canitdadDeBolsasArena += bolsasValidadas;
        break;
      case "cal":
        cantidadDeBolsasCal += bolsasValidadas;
        break;
      case "cemento":
        cantidadDeBolsasCemento += bolsasValidadas;
        break;
    };

    if(precioValidado > precioPorBolsaMasCaro) {
      precioPorBolsaMasCaro = precioValidado;
      materialMasCaro = materialValidado;
    };

    totalCostoBruto += (bolsasValidadas * precioValidado);

  }
  while(continuar);
  //APLICAR LOS DESCUENTOS
  let totalDeBolsas = cantidadDeBolsasCemento + cantidadDeBolsasCal + canitdadDeBolsasArena;

  if(totalDeBolsas > 10 && totalDeBolsas < 30) {
    descuento = 0.15;
  }
  else if (totalDeBolsas > 30) {
    descuento = 0.25;
  };

  totalConDescuento = totalCostoBruto - (totalCostoBruto * descuento);

 //CALCULAR EL TIPO CON MÁS CANTIDAD DE BOLSAS

  let q = Math.max(canitdadDeBolsasArena, cantidadDeBolsasCemento, cantidadDeBolsasCal);
  if(q == canitdadDeBolsasArena) {
    materialMasComprado= "arena";
  }
  else if(q ==cantidadDeBolsasCemento) {
    materialMasComprado= "cemento";
  }
  else {
    materialMasComprado= "cal";
  };


  //INFORMAR AL CLIENTE

  alert(`El importe bruto a pagar es de $${totalCostoBruto}.`)

  if(descuento > 0) { 
    alert(`Por la cantidad comprada se le ha realizado un descuento del ${descuento*100}%. El total a pagar es de ${totalConDescuento}`);
  };

  alert(`El material más comprado fue ${materialMasComprado}, con ${q} bolsas.`);
  alert(`El precio más alto por bolsa fue del material ${materialMasCaro}, de unos $${precioPorBolsaMasCaro}`);

};
