function mostrar()
{
	var destino;
	var mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino) 
	{
		case "Cataratas":
		case "Mar del plata":
			mensaje = "Calor";
		break;
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Frío";
		break;
	};
	
	alert(mensaje);
};
//Alumno: Ferraris Ezequiel - División H