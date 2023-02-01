function mostrar() {

  let precioJabonMasCaro = 0;
  let cantidadJabonMasCaro;
  let fabricanteJabonMasCaro;

  let cantidadJabones = 0;
  let cantidadBarbijos = 0;
  let cantidadAlcohol = 0;

  let comprasJabones = 0;
  let comprasAlcohol = 0;
  let comprasBarbijos = 0;

  let productoMasComprado;
  let cantidadMasComprada;
  let promedioPorCompraMasComprado = 0;

  for(let i= 0; i<5; i++) {

    if(i==0) {
      alert("Bienvenido, aquí podrá cargar los 5 productos comprados.");
    }
    else {
      alert(`A continuación podrá cargar el producto número ${i+1}`);
    };
    
    let productoValidado; //"barbijo" , "jabón" o "alcohol"
    let precioValidado; // +100 < p< 300
    let cantidadValidada; //  1000 > c > 0 
    let marcaValidada; // 
    let fabricanteValidado;

    productoValidado = prompt("Por favor, ingrese el producto a comprar. Debe ser jabón, alcohol o barbijos");
    while(productoValidado != "barbijos" && productoValidado != "alcohol" && productoValidado != "jabón") {
      productoValidado = prompt("El valor ingresado es incorrecto, inténtelo nuevamente:");
    };

    precioValidado = parseFloat(prompt("Por favor, ingrese el precio del producto. Debe ser un número entre 100 y 300."));
    while(isNaN(precioValidado) || precioValidado < 100 || precioValidado > 300) {
      precioValidado = parseFloat(prompt("El valor ingresado es incorrecto, inténtelo nuevamente:"));
    };

    cantidadValidada = parseInt(prompt("Por favor, ingrese la cantidad de productos. Deber ser mayor a 0 y menor a 1000"));
    while(isNaN(cantidadValidada) || cantidadValidada < 0 || cantidadValidada > 1000) {
      cantidadValidada = prompt("El valor ingresado es incorrecto, inténtelo nuevamente:");
    };

    let checker = /[^a-zA-Z]/g;

    marcaValidada = prompt("Ingrese la marca del producto. Solo puede contener letras.");
    console.log(marcaValidada)
    while(!marcaValidada || checker.test(marcaValidada) || marcaValidada.length <= 1) {
      marcaValidada = prompt("El valor ingresado es incorrecto, inténtelo nuevamente:");
    };

    fabricanteValidado = prompt("Por favor, ingrese el fabricante del producto. Solo puede contener letras.");
    while (!fabricanteValidado || checker.test(fabricanteValidado || fabricanteValidado.length <= 1)) {
      fabricanteValidado = prompt("El valor ingresado es incorrecto, inténtelo nuevamente:");
    };

    switch(productoValidado) {
      case "jabón":
        if(precioValidado > precioJabonMasCaro) {
          precioJabonMasCaro = precioValidado;
          fabricanteJabonMasCaro = fabricanteValidado;
          cantidadJabonMasCaro = cantidadValidada;
        };
        comprasJabones++;
        cantidadJabones += cantidadValidada;
        break;
      case "alcohol":
        comprasAlcohol++;
        cantidadAlcohol += cantidadValidada;
        break;
      case "barbijos":
        comprasBarbijos++;
        cantidadBarbijos += cantidadValidada;
        break;
    };
  };

  cantidadMasComprada = Math.max(cantidadAlcohol, cantidadBarbijos, cantidadJabones);

  if(cantidadMasComprada == cantidadAlcohol) {
    productoMasComprado = "alcohol";
    promedioPorCompraMasComprado = (cantidadAlcohol / comprasAlcohol).toFixed(2);
  }
  else if (cantidadMasComprada === cantidadBarbijos) {
    productoMasComprado = "barbijos";
    promedioPorCompraMasComprado = (cantidadBarbijos / comprasBarbijos).toFixed(2)
  }
  else {
    productoMasComprado = "jabón";
    promedioPorCompraMasComprado = (cantidadJabones / comprasJabones).toFixed(2)
  };

  alert(`El jabón más caro comprado salió $${precioJabonMasCaro} y se compraron ${cantidadJabonMasCaro} unidades. Su fabricante es ${fabricanteJabonMasCaro}. El producto más comprado fue ${productoMasComprado} y se compraron ${promedioPorCompraMasComprado} unidades en promedio por compra. La cantidad de barbijos comprada fue de ${cantidadBarbijos}.`);

};

/*  

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio, <br>
			de cada una debo obtener los siguientes datos: <br>
			el tipo de producto (validar "barbijo" , "jabón" o "alcohol") , <br>
			el precio (validar entre 100 y 300),<br>
			la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
			 la Marca y el fabricante. <br>
			Se debe Informar al usuario lo siguiente:<br>

			a) Del más caro de los jabones, la cantidad de unidades y el fabricante<br>
			b) Del tipo de producto con más unidades en total de la compra, el promedio por compra <br>
			c) Cuántas unidades de Barbijos se compraron en total <br><br>
      */