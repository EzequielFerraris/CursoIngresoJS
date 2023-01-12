function mostrar()
{
	let destino = document.getElementById("txtIdDestino").value;

	switch(destino) {
		case "Cataratas":
		case "Mar del plata":
			alert("Calor");
			break;
		case "Bariloche":
		case "Ushuaia":
			alert("Frío");
			break;
}
}

//FIN DE LA FUNCIÓN