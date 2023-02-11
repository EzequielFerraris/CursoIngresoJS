function mostrar()
{
	var destino;
	var estacion; 
	var valorBase;
	var precio;
	var mensaje;
	var descuento;
	var aumento;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;
	valorBase = 15000;
	descuento = 0;
	aumento = 0;

	switch(estacion) 
	{
		case "Invierno":
			switch(destino) 
			{
				case "Cataratas":
				case "Cordoba":
					descuento = 10;
				break;
				case "Mar del plata":
					descuento = 20;
				break;
				case "Bariloche":
					aumento = 20;
				break;
			};
		break;
		case "Verano":
			switch(destino) 
			{
				case "Cataratas":
				case "Cordoba":
					aumento = 10;
				break;
				case "Mar del plata":
					aumento = 20;
				break;
				case "Bariloche":
					descuento = 20;
				break;
			};
		break;
		case "Primavera":
		case "Otoño":
			switch(destino) 
			{
				case "Cataratas":
				case "Mar del plata":
				case "Bariloche":
					aumento = 10;
				break;
			};
		break;
	};

	descuento = valorBase * descuento / 100;
	aumento = valorBase * aumento / 100;
	precio = valorBase + aumento - descuento;

	mensaje = "La estadía cuesta $" + precio;
	alert(mensaje);
};

//Alumno: Ferraris Ezequiel - División H