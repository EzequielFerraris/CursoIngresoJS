/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar(){
	let i = 0;
	let arrPos = [];
	let arrNeg = [];
	let ceros = [];
	let continuar = true;
	let exp = new RegExp('si', 'i');

	do {
		if(i != 0) {
			let pregunta = prompt("¿Desea continuar agregando números?");
			if(!exp.test(pregunta)) {
				continuar = false;
				break;
			}
		}
		let dato = prompt("Ingrese un número entero: ");
			dato = parseInt(dato);
			if(dato == 0) {
				ceros.push(dato);
			}
			else if(dato < 0) {
				arrNeg.push(dato);
			}
			else{
				arrPos.push(dato);
			}
			i++;	
	}
	while(continuar); //fin del while

	let sumaNegativos;
	let sumaPositivos;
	let cantPositivos = arrPos.length;
	let cantNegativos = arrNeg.length;
	let cantCeros = ceros.length;
	let nrosPares = [];
	let promPositivos;
	let promedioNeg;
	let diferencia;

	if(arrNeg.length == 0) {
		sumaNegativos = 0;
		promedioNeg = "No hay números positivos ingresados";
	}
	else {
		sumaNegativos = arrNeg.reduce((sum, x) => sum + x);
		promedioNeg = (sumaNegativos / cantNegativos).toFixed(2);
		nrosPares.push(arrNeg.filter((x) => {if(x % 2 == 0){return x}}));
	};
	if(arrPos.length == 0) {
		sumaPositivos = 0;
		promPositivos = "No hay números positivos ingresados";
	}
	else {
		sumaPositivos = arrPos.reduce((sum, x) => sum + x);
		promPositivos = (sumaPositivos / cantPositivos).toFixed(2);
		nrosPares.push(arrPos.filter((x) => {if(x % 2 == 0){return x}}));
	};

	let cantNrosPares = nrosPares.flat().length;
	diferencia = sumaPositivos + sumaNegativos;
	

	document.write(`1-Suma de los negativos: ${sumaNegativos}.<br>
	2-Suma de los positivos: ${sumaPositivos}.<br>
	3-Cantidad de positivos: ${cantPositivos}.<br>
	4-Cantidad de negativos: ${cantNegativos}.<br>
	5-Cantidad de ceros: ${cantCeros}.<br>
	6-Cantidad de números pares: ${cantNrosPares}.<br>
	7-Promedio de positivos: ${promPositivos}.<br>
	8-Promedios de negativos: ${promedioNeg}.<br>
	9-Diferencia entre positivos y negativos: ${diferencia}.<br>
	10-Números pares ingresados: ${nrosPares}<br>`);

};

