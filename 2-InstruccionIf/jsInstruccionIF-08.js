function mostrar(){

	var edad;
	var estadoCivil;
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;
	mensaje = "Es soltero y no es menor.";

	edad = parseInt(edad);

	if(edad >= 18 && estadoCivil == "Soltero") {
		alert(mensaje);
	};
};

//ALUMNO: FERRARIS EZEQUIEL - DIVISIÓN H