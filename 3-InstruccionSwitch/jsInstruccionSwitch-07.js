function mostrar()
{
	var destino;
	var mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino) 
	{
		case "Cataratas":
			mensaje = "Norte";
		break;
		case "Mar del plata":
			mensaje = "Este";
		break;
		case "Bariloche":
			mensaje = "Oeste";
		break;
		case "Ushuaia":
			mensaje = "Sur";
		break;
	};

	alert(mensaje);
};

//Alumno: Ferraris Ezequiel - División H