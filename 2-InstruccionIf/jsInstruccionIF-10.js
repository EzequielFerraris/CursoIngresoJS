function mostrar(){
	
	var min;
	var max;
	var numeroRandom;
	var mensaje; 

	min = 1;
	max = 10;
	numeroRandom = Math.random() * (max - min);
	numeroRandom = Math.floor(numeroRandom) + min;
	
	if(numeroRandom < 4) {
		mensaje = "Vamos, la próxima se puede. Nota: " + numeroRandom;
	}
	else if(numeroRandom >= 4 && numeroRandom < 9) {
		mensaje = "APROBÓ.  Nota: " + numeroRandom;
	}
	else {
		mensaje = "EXCELENTE.  Nota: " + numeroRandom;
	};

	alert(mensaje);
};
//ALUMNO: FERRARIS EZEQUIEL - DIVISIÓN H