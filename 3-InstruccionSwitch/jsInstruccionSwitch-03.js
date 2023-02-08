
function mostrar() {
	var mesDelAño;
	var mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;
	
	switch(mesDelAño) {
		case "Febrero":
			mensaje = "Este mes no tiene más de 29 días.";
			break;
		default:
			mensaje = "Este mes tiene 30 o más días.";
			break;
	};
	
	alert(mensaje);
};

//Alumno: Ferraris Ezequiel - División H