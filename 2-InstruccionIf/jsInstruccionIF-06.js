function mostrar(){

	var edad; 
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad= parseInt(edad);
	mensaje = "Es ";
	
	if(edad < 13) {
		mensaje = "un niño";
	}
	else if(edad >= 13 && edad <=17)  {
		mensaje = "adolescente";
	}
	else {
		mensaje = "mayor de edad";
	};

	alert(mensaje);
};

//ALUMNO: FERRARIS EZEQUIEL - DIVISIÓN H

// SIN ELSE IF

function mostrar(){

	var edad; 
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad= parseInt(edad);
	mensaje = "Es ";
	
	if(edad < 13) {
		mensaje = "un niño";
	}
	else {
		if(edad > 17)  {
			mensaje = "mayor de edad";
			
		}
		else {
			mensaje = "adolescente";
		};
	};

	alert(mensaje);
};