function mostrar() {
	 
	var edad;
	var mensaje;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 18) {
		mensaje = "mayor";
	} 
	else {
		mensaje = "menor";
	};

	alert("Es " + mensaje + " de edad");
};
//ALUMNO: FERRARIS EZEQUIEL - DIVISIÓN H