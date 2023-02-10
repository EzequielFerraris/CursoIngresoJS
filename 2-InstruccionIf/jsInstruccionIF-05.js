function mostrar(){

	var edad;
	var mensaje;

	mensaje = "No es adolescente";
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad < 13 || edad > 17) {
		alert(mensaje);
	};
};
//ALUMNO: FERRARIS EZEQUIEL - DIVISIÓN H

//SIN OPERADORES LÓGICOS

function mostrar() {

	var edad;
	var mensaje;

	mensaje = "No es adolescente";
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad < 13) {
		alert(mensaje);
	}
	else { 
		if(edad > 17) {
			alert(mensaje);
	};
	};
	
};