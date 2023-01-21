
function mostrar()
{
	//reservo lugar para los datos de cada producto a ingresar por el usuario.

	let carrito = [];

	//VALIDA TIPO
	function validarTipo() {
		let invalido = true;
		let i=0
		do {
			let productoI;
			if(i ==0) {
				productoI = prompt("Por favor, ingrese el tipo de producto:");
				i++;
			}
			else {
				productoI = prompt("No ha ingresado un tipo de producto válido, inténtelo nuevamente:")
			}
			if(productoI != "barbijo" && productoI != "jabón" && productoI != "alcohol") {
				continue;
			};
			invalido=false;
			return(productoI)
		}
		while(invalido);
	};

	//VALIDA PRECIO
	function validarPrecio() {
		let invalido = true;
		let i=0;
		do {
			let precioI;
			if(i ==0) {
				precioI = prompt("Por favor, ingrese el precio del producto:");
				i++;
			}
			else {
				precioI = prompt("No ha ingresado un precio válido, inténtelo nuevamente:")
			};

			let checker = new RegExp("[^0-9.]")
			
			if(checker.test(precioI)) {
				continue;
			};
			precioI = parseFloat(precioI);
			if(precioI > 300 || precioI < 100 || isNaN(precioI)) {
				continue;
			};
			invalido=false;
			return(precioI)
		}
		while(invalido);
	};

	//VALIDA CANTIDAD
	function validarCantidad() {
		let invalido = true;
		let i=0
		do {
			let cantidadI;
			if(i ==0) {
				cantidadI = prompt("Por favor, ingrese la cantidad de producto:");
				i++
			}
			else {
				cantidadI = prompt("No ha ingresado una cantidad válida, inténtelo nuevamente:")
			}
			let checker = /[^0-9.]/g
			if(checker.test(cantidadI)) {
				continue;
			};
			cantidadI = parseFloat(cantidadI);
			if( cantidadI <= 0 || cantidadI > 1000 || isNaN(cantidadI) ) {
				continue;
			};
			invalido=false;
			return(cantidadI)
		}
		while(invalido)
	};

	//VALIDA MARCA
	function validarMarca() {
		let invalido = true;
		let i=0
		do {
			let marcaI;
			if(i ==0) {
				marcaI = prompt("Por favor, ingrese la marca del producto:");
				i++
			}
			else {
				marcaI = prompt("No ha ingresado una marca válida, inténtelo nuevamente:")
			}
			let checker = /[\W_]/gi
			if(checker.test(marcaI) || marcaI == "") {
				continue;
			};
			invalido=false;
			return(marcaI)
		}
		while(invalido);
	};

	//VALIDA FABRICANTE
	function validarFabricante() {
		let invalido = true;
		let i=0
		do {
			let fabricanteI;
			if(i ==0) {
				fabricanteI = prompt("Por favor, ingrese el fabricante del producto:");
				i++
			}
			else {
				fabricanteI = prompt("No ha ingresado un fabricante válido, inténtelo nuevamente:")
			}
			let checker = /[\W_]/gi
			if(checker.test(fabricanteI) || fabricanteI == "") {
				continue;
			};
			invalido=false;
			return(fabricanteI)
		}
		while(invalido);
	};

	//LOOP DE CARGA DE DATOS
	let productosCargados = 0;
	while(productosCargados < 5) {

		let productoValidado = validarTipo();
		let precioValidado = validarPrecio();
		let cantidadValidada = validarCantidad();
		let marcaValidada = validarMarca();
		let fabricanteValidado = validarFabricante();

		let productoA = [productoValidado, precioValidado, cantidadValidada, marcaValidada, fabricanteValidado]
		carrito.push(productoA);
		productosCargados++;
	};
//INFORMAR AL USUARIO EL ALCOHOL MÁS BARATO, LA CANTIDAD Y EL FABRICANTE
	alcoholMasBarato = [];
	for(let i=0; i < 5; i++) {
		if(carrito[i][0] == "alcohol") {
			if(alcoholMasBarato.length == 0) {
				alcoholMasBarato.push(carrito[i][1]);
				alcoholMasBarato.push(carrito[i][2]);
				alcoholMasBarato.push(carrito[i][4]);
			}
			else if (carrito[i][1] < alcoholMasBarato[0]){
				alcoholMasBarato = [];
				alcoholMasBarato.push(carrito[i][1]);
				alcoholMasBarato.push(carrito[i][2]);
				alcoholMasBarato.push(carrito[i][4]);
			};
		};
	};

	if(alcoholMasBarato.length == 0) {
		alert("No se ha comprado alcohol en esta ocasión, por lo que no hay un precio, cantidad o fabricante que mostrar");
	}
	else {
		alert(`El alcohol de precio más bajo ingresado sale $${alcoholMasBarato[0]}, hay ${alcoholMasBarato[1]} unidades y el fabricante es ${alcoholMasBarato[2]}`);
	}
	
	
//DEL PRODUCTO MÁS COMPRADO EL PROMEDIO POR COMPRA

	let alcoholComprado = 0;
	let cantAlcohol = 0;
	let barbijoComprado = 0;
	let cantBarbijo = 0;
	let jabonComprado = 0;
	let cantJabon = 0;

	for(let i=0; i < 5; i++) {
		switch(carrito[i][0]) {
			case "alcohol":
				alcoholComprado++;
				cantAlcohol += carrito[i][2];
				break;
			case "barbijo":
				barbijoComprado++;
				cantBarbijo += carrito[i][2];
				break;
			case "jabón":
				jabonComprado++;
				cantJabon += carrito[i][2];
				break;
		}
	};

	let cantProductoMasComprado = Math.max(cantAlcohol, cantBarbijo, cantJabon);
	let productoMasComprado;
	let vecesComprado;
	
	if(cantAlcohol == cantProductoMasComprado) {
		productoMasComprado = "alcohol";
		vecesComprado = alcoholComprado;
	} 
	else if(cantBarbijo == cantProductoMasComprado) {
		productoMasComprado = "barbijo";
		vecesComprado = barbijoComprado;
	}
	else {
		productoMasComprado = "jabón";
		vecesComprado = jabonComprado;
	};
	let promedio = cantProductoMasComprado / vecesComprado;
	promedio = promedio.toFixed(1);

	alert(`${productoMasComprado} es el producto más comprado. En promedio se compraron ${promedio} unidades por compra;`);

	//INFORMAMOS LA CANTIDAD DE JABÓN COMPRADA
	alert(`Se compraron ${cantJabon} unidades de jabón en total.`);
}
