function mostrar(){
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	switch(destino) {
		case "Cataratas":
			alert("Norte");
			break;
		case "Mar del plata":
			alert("Este");
			break;
		case "Bariloche":
			alert("Oeste");
			break;
		case "Ushuaia":
			alert("Sur");
			break;
	};
};

//Alumno: Ferraris Ezequiel - División H