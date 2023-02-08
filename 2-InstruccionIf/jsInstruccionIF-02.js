function mostrar(){
	
	var edad;
	var mensaje;

	mensaje = "Es mayor de edad";
	edad = document.getElementById("txtIdEdad").value
	edad = parseInt(edad);

	if(edad >= 18) {
		alert(mensaje);
	};
};
//ALUMNO: FERRARIS EZEQUIEL - DIVISIÓN H