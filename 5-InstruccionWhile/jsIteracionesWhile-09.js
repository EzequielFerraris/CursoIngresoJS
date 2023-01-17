/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	let i = 0;
	let arr = [];
	let continuar = true;
	let exp = new RegExp('si', 'i');
	let max = 0;
	let min = 0;

	do {
		if(i != 0) {
			let pregunta = prompt("¿Desea continuar agregando números?");
			if(!exp.test(pregunta)) {
				continuar = false;
				break;
			}
		}
		else {
			let dato = prompt("Ingrese un número entero: ");
			dato = parseInt(dato);
			arr.push(parseInt(dato));
			i = 1;
		}
	}
	while(continuar);

	if (arr.length != 0) {
		max = Math.max(...arr);
		min =  Math.min(...arr);
	};

	document.getElementById("txtIdMaximo").value = max;
	document.getElementById("txtIdMinimo").value = min;

}; //FIN DE LA FUNCIÓN