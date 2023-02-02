function mostrar(){

	let mesDelAño;

	mesDelAño = document.getElementById("txtIdMes").value;
	
	switch(mesDelAño) {
		case "Febrero":
			alert("Tiene 28 días.");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Tiene 31 días.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 días.");
			break;
	}; 	
};

//Alumno: Ferraris Ezequiel - División H