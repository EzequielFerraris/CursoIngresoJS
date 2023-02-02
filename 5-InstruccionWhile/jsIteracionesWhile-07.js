/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let i = 0;
	let suma = 0;
	let continuar = true;
	let promedio = 0;

	do {
		if(i != 0) {
			let pregunta = prompt("¿Desea continuar agregando números?");
			if(pregunta != "Si" && pregunta != "SI" && pregunta != "si") {
				continuar = false;
				break;
			};
		};
		let dato = prompt("Ingrese un número entero: ");
			suma += parseInt(dato);
		i++;
	}
	while(continuar);
	
	document.getElementById("txtIdSuma").value = suma;
	
	if(i > 0) {
		promedio = (suma / i).toFixed(2);
	};
	
	document.getElementById("txtIdPromedio").value = promedio;
};
//Alumno: Ferraris Ezequiel - División H