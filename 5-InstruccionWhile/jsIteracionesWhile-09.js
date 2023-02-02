
function mostrar() {

	let max;
	let min;

	let i = 0;
	let continuar = true;

	do {
		let dato;
		//PRIMERA ITERACIÓN. MENSAJE AL USUARIO
		if(i==0) {
			alert("Bienvenido, aquí podrá ingresar sus números para obtener el máximo y mínimo.");
			i++;
		}
		else { //A PARTIR DE LA SEGUNDA ITERACIÓN. CONTINUAR O ROMPER LA ESTRUCTURA ITERATIVA
			let pregunta = prompt("¿Desea continuar agregando números?");
			if(pregunta != "Si" && pregunta != "SI" && pregunta != "si") {
				continuar = false;
				break;
			};
		};
		//COMÚN A AMBOS CASOS. PIDO EL NÚMERO Y LO VALIDO
		dato = prompt("Ingrese un número entero:");
		dato = parseInt(dato);
		if(isNaN(dato)) {
			alert("El dato ingresado no es un número");
			continue;
		};
		//SI EL DATO ES NÚMERO, O LO ASIGNO (SI ES EL PRIMER DATO), O LO COMPARO PARA ASIGNARLO SI CORRESPONDE.
		if(isNaN(min)) {
			min = dato;
			max = dato;
		}
		else if (min > dato) {
			min = dato;
		} 
		else if (max < dato) {
			max = dato;
		};	
	}
	while(continuar);
	//REDERIZO LOS DATOS EN EL HTML
	document.getElementById("txtIdMaximo").value = max;
	document.getElementById("txtIdMinimo").value = min;
}; 

//Alumno: Ferraris Ezequiel - División H
