function mostrar(){
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	switch(destino) {
		case "Cataratas":
		case "Mar del plata":
			alert("Calor");
			break;
		case "Bariloche":
		case "Ushuaia":
			alert("Frío");
			break;
	};
};
//Alumno: Ferraris Ezequiel - División H