function mostrar()
{
	var destino;
	var estacion;
	var mensaje1;
	var mensaje2;
	var mensajeFinal;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;
	mensaje1 = "No se viaja";
	mensaje2= "Se viaja";
	
	switch(estacion) 
	{
		case "Invierno":
			switch(destino) 
			{
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
					mensajeFinal = mensaje1;
				break;
				case "Bariloche":
					mensajeFinal = mensaje2;
				break;
			};
		break;

		case "Verano":
			switch(destino) 
			{
				case "Cordoba":
				case "Bariloche":
					mensajeFinal = mensaje1;
				break;
				case "Cataratas":
				case "Mar del plata":
					mensajeFinal = mensaje2;
				break;
			};
		break;

		case "Primavera":
			switch(destino) 
			{
				case "Bariloche":
					mensajeFinal = mensaje1;
				break;
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
					mensajeFinal = mensaje2;;
				break;
			};
		break;

		case "Otoño":
			mensajeFinal = mensaje2;
		break;
	};

	alert(mensajeFinal);
};

//Alumno: Ferraris Ezequiel - División H
