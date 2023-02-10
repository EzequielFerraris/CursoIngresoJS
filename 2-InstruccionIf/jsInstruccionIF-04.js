function mostrar(){

	var edad;
	var mensaje;

	mensaje = "Es adolescente";
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	if(edad >= 13 && edad <= 17) {
		alert(mensaje);
	};
};

//ALUMNO: FERRARIS EZEQUIEL - DIVSIÓN H

// SIN OPERADORES LÓGICOS

function mostrar(){

	var edad;
	var mensaje;

	mensaje = "Es adolescente";
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	if(edad >= 13) {

		if(edad <= 17) {

			alert(mensaje);
		
		};
	};
};