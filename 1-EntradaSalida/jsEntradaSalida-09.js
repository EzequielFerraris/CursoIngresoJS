function mostrarAumento() {
	
	var sueldo;
	var nuevoSueldo;
	var aumento;

	aumento= prompt("Por favor, ingrese el porcentaje de aumento que desea ingresar (en porcentaje): ");
	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseFloat(sueldo);

	aumento = parseInt(aumento);

	nuevoSueldo = sueldo + (sueldo * aumento / 100);
	document.getElementById("txtIdResultado").value = nuevoSueldo;

};

//ALUMNO: FERRARIS EZEQUIEL - DIVISIÓN H
