function validarDato(nombre, min="not", max="not") {

  let i=0;
  let condition =  true;
  do {
      let datoI;
      let mensajeAd;
      let tipoDato;

      switch(nombre) {
          case "el producto":
              mensajeAd = `Puede ser "barbijos", "alcohol" o "jabón".`;
              tipoDato = "string";
              break;
          case "el precio":
              mensajeAd = `Debe ser entre $100 y $300"`;
              tipoDato = "number";
              break;
          case "la cantidad":
              mensajeAd = `Debe ser entre 0 y 1000`;
              tipoDato = "number";
              break;
          case "la marca":
          case "el fabricante":
              mensajeAd = `Solo debe contener letras`;
              tipoDato = "string";
              break;
      };

      if(i==0) {
          datoI = prompt(`Por favor, ingrese un dato para ${nombre}. ${mensajeAd}`);
          i++;
      }
      else {
          datoI = prompt(`El dato ingresado es inválido. Intentelo nuevamente. ${mensajeAd}`);
      };
      let checker;

      //Si es un string
      if(tipoDato == "string") {
          checker = /[^a-zA-Záéíóú]/gi;
          if(checker.test(datoI) || typeof datoI != "string") {
              continue;
          };
          switch(nombre) {
              case "la marca":
              case "el fabricante":
                  if(datoI.length <= 1) {
                      continue;
                  };
                  break;
              case "el producto":
                  if(datoI !="barbijos" && datoI !="alcohol" && datoI !="jabón") {
                      continue;
                      }
                  break;      
          };
      }
      else {
          checker = /[^0-9.]/g;

          if(checker.test(datoI)) {
              continue;
          };
          datoI = parseFloat(datoI);
          if(isNaN(datoI)) {
            continue;
        };
          if(typeof min == "number") {
              if(datoI < min) {
                  continue;
              }
          };
          if(typeof max == "number") {
              if(datoI > max) {
                  continue;
              }
          };
      };
      condition = false;
      return datoI;
  }
  while(condition);
};

function mostrar() {
  
  let precioJabonMasCaro = 0;
  let cantidadJabonCaro = 0;
  let fabricanteJabonMasCaro = "no se compraron jabones";

  let cantidadJabon = 0;
  let cantidadAlcohol = 0;
  let cantidadBarbijos = 0;

  let comprasJabon = 0;
  let comprasAlcohol = 0;
  let comprasBarbijos= 0;

  let cantidadProductoMasComprado = 0;
  let productoMasComprado;
  let promedioPorCompra;

  for(let i=0; i < 2; i++){
      if(i==0) {
          alert(`Bienvenido! Aquí podrá ingresar los insumos sanitarios a comprar`);
      }
      else {
        alert(`A continuación podrá ingresar el producto número ${i+1}`)
      }

      //VALIDAR

      let tipoValidado = validarDato("el producto");
      let precioValidado = validarDato("el precio", 100, 300);
      let cantidadValidada = validarDato("la cantidad", 0, 1000);
      let marcaValidada = validarDato("la marca");
      let fabricanteValidado = validarDato("el fabricante");

      switch(tipoValidado) {
        case "jabón":
          cantidadJabon += cantidadValidada;
          comprasJabon++;
          break;
        case "alcohol":
          cantidadAlcohol += cantidadValidada;
          comprasAlcohol++;
          break;
        case "barbijos":
          cantidadBarbijos += cantidadValidada;
          comprasBarbijos++;
          break;
      }

      if(tipoValidado == "jabón" && precioJabonMasCaro == 0) {
        precioJabonMasCaro = precioValidado;
        cantidadJabonCaro = cantidadValidada;
        fabricanteJabonMasCaro = fabricanteValidado;
      };
      
      if(tipoValidado == "jabón" && precioJabonMasCaro < precioValidado) {
        precioJabonMasCaro = precioValidado;
        cantidadJabonCaro = cantidadValidada;
        fabricanteJabonMasCaro = fabricanteValidado;
      };

  };

  cantidadProductoMasComprado = Math.max(cantidadAlcohol, cantidadBarbijos, cantidadJabon);

  if(cantidadProductoMasComprado == cantidadAlcohol) {
    productoMasComprado = "alcohol";
    promedioPorCompra = (cantidadAlcohol / comprasAlcohol).toFixed(2);
  } 
  else if(cantidadProductoMasComprado == cantidadBarbijos) {
    productoMasComprado = "barbijo";
    promedioPorCompra = (cantidadBarbijos / comprasBarbijos).toFixed(2);
  } 
  else {
    productoMasComprado = "jabón";
    promedioPorCompra = (cantidadJabon / comprasJabon).toFixed(2);
  };

  alert(`La cantidad comprada del jabón más caro fue ${cantidadJabonCaro} y su fabricante fue ${fabricanteJabonMasCaro}.
El promedio por compra del producto más comprado (${productoMasComprado}), fue de ${promedioPorCompra}.
La cantidad de barbijos comprada fue de ${cantidadBarbijos}`);
};
