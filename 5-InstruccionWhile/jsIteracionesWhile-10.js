function mostrar(){

	let sumaNegativos = 0;
	let sumaPositivos = 0;
	let cantidadPositivos = 0;
	let cantidadNegativos = 0;
	let cantidadCeros = 0;
	let cantidadPares = 0;
	let promedioPositivos = 0;
	let promedioNegativos = 0;
	let diferencia = 0;

	let i = 0;
	let condition = true;
	do {
		let pregunta;
		if(i == 0) {
			alert("Bienvenido. Aquí podrá ingresar los números que desee y obtener sus estadísticas.");
			i++;
		}
		else {
			pregunta = prompt("¿Desea seguir agregando números?");
			if(pregunta != "SI" && pregunta != "si" && pregunta != "Si") {
				condition = false;
				break;
			};
		};

		let numeroValidado = parseInt(prompt("Por favor, ingrese un número entero. Puede ser positivo o negativo"));

		while(isNaN(numeroValidado)) {
			numeroValidado = parseInt(prompt("El dato ingresado no es un número entero. Inténtelo nuevamente."));
		};

		if(numeroValidado < 0) {
			sumaNegativos += numeroValidado;
			cantidadNegativos++;
		} 
		else if (numeroValidado > 0) {
			sumaPositivos += numeroValidado;
			cantidadPositivos++;
		}
		else {
			cantidadCeros++;
		}

		if(numeroValidado % 2 == 0) {
			cantidadPares++;
		};
	}
	while(condition);

	if(cantidadPositivos > 0) {
		promedioPositivos = (sumaPositivos / cantidadPositivos).toFixed(2)
	};
	if(cantidadNegativos > 0) {
		promedioNegativos = (sumaNegativos / cantidadNegativos).toFixed(2)
	};

	diferencia = sumaPositivos - sumaNegativos;

	document.write(`Los datos obtenidos fueron: <br>
1-Suma de los negativos: ${sumaNegativos} <br>
2-Suma de los positivos: ${sumaPositivos} <br>
3-Cantidad de positivos: ${cantidadPositivos} <br>
4-Cantidad de negativos: ${cantidadNegativos} <br>
5-Cantidad de ceros: ${cantidadCeros} <br>
6-Cantidad de números pares: ${cantidadPares} <br>
7-Promedio de positivos: ${promedioPositivos} <br>
8-Promedios de negativos: ${promedioNegativos} <br>
9-Diferencia entre positivos y negativos: ${diferencia} <br>`); 
};

//Alumno: Ferraris Ezequiel - División H