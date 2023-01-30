
function mostrar () {

    let precioJabonMasCaro = 0;
    let cantidadJabonesMasCaros = 0;
    let fabricanteJabonMasCaro = "ninguno";
    let cantidadJabones = 0;
    let cantidadBarbijos = 0;
    let cantidadAlcohol = 0;
    let comprasJabones = 0;
    let comprasAlcohol = 0;
    let comprasBarbijos = 0;
    let cantidadMasComprado;
    let elementoMasComprado;
    let promedioMasComprado;

    for(let i = 0; i<5; i++) {

      if(i==0) {
        alert("Bienvenido, aquí puede registrar los insumos comprados.");
      }
      else {
        alert(`A continuación podrá cargar el producto número ${i+1}`);
      };

      let productoValidado;
      let precioValidado;
      let cantidadValidada;
      let marcaValidada;
      let fabricanteValidado;

      productoValidado = prompt(`Por favor, ingrese el insumo a comprar. Puede ser "jabón", "alcohol" o "barbijos"`);
      while(productoValidado != "barbijos" && productoValidado != "alcohol" && productoValidado != "jabón") {
        productoValidado = prompt(`El dato ingresado es inválido, intentelo nuevamente.  Puede ser "jabón", "alcohol" o "barbijos"`);
      };

      precioValidado = parseFloat(prompt(`Por favor, ingrese el precio del insumo. Debe ser mayor a 100 y menor a 300`));
      while(isNaN(precioValidado) || precioValidado < 100 || precioValidado > 300) {
        precioValidado = prompt("El dato ingresado es inválido, intentelo nuevamente.  Debe ser mayor a 100 y menor a 300");
      };

      cantidadValidada = parseInt(prompt(`Por favor, ingrese la cantidad a comprar. Debe ser entera, mayor a 0 y menor a 1000`));
      while(isNaN(cantidadValidada) || cantidadValidada < 0 || cantidadValidada > 1000) {
        cantidadValidada = prompt("El dato ingresado es inválido, intentelo nuevamente. Debe ser entera, mayor a 0 y menor a 1000");
      };

      marcaValidada = prompt(`Por favor, ingrese la marca del insumo. Debe contener solo letras.`);
      let checker = /[^a-zA-Z]/gi
      while(marcaValidada.length < 1 || checker.test(marcaValidada)) {
        marcaValidada = prompt("El dato ingresado es inválido, intentelo nuevamente. Debe contener solo letras.");
      };

      fabricanteValidado = prompt(`Por favor, ingrese el fabricante del producto. Debe contener solo letras`);
      while(fabricanteValidado.length < 1 || checker.test(fabricanteValidado)) {
        fabricanteValidado = prompt("El dato ingresado es inválido, intentelo nuevamente. Debe contener solo letras");
      };

      switch(productoValidado) {
        case "jabón":
          cantidadJabones += cantidadValidada;
          comprasJabones++;
          
          if(precioJabonMasCaro == 0) {
            precioJabonMasCaro = precioValidado;
            cantidadJabonesMasCaros = cantidadValidada;
            fabricanteJabonMasCaro = fabricanteValidado;
          }
          else if (precioJabonMasCaro < precioValidado) {
            precioJabonMasCaro = precioValidado;
            cantidadJabonesMasCaros = cantidadValidada;
            fabricanteJabonMasCaro = fabricanteValidado;
          };
          break;
        case "barbijos":
          cantidadBarbijos += cantidadValidada;
          comprasBarbijos++;
          break;
        case "alcohol":
          cantidadAlcohol += cantidadValidada;
          comprasAlcohol++;
          break;
      };

    };

    cantidadMasComprado = Math.max(cantidadAlcohol, cantidadBarbijos, cantidadJabones);
    
    if(cantidadMasComprado == cantidadAlcohol) {
      elementoMasComprado = "alcohol";
      promedioMasComprado = (cantidadAlcohol / comprasAlcohol).toFixed(2);
    }
    else if (cantidadMasComprado == cantidadBarbijos) {
      elementoMasComprado = "barbijo";
      promedioMasComprado = (cantidadBarbijos / comprasBarbijos).toFixed(2);
    }
    else {
      elementoMasComprado = "jabón";
      promedioMasComprado = (cantidadJabones / comprasJabones).toFixed(2);
    };

    alert(`La cantidad comprada del jabón más caro fue de ${cantidadJabonesMasCaros} y su fabricante fue ${fabricanteJabonMasCaro}. El producto más comprado fue el ${elementoMasComprado} y el promedio por compra fue de ${promedioMasComprado} unidades. La cantidad de barbijos comprada fue de ${cantidadBarbijos}`);

};
