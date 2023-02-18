

function mostrar() 
{
	var personaValidada;
	var edadValidada;
	var sexoValidado;
	var estadoCivilValidado;
	var tempValidada;

	var nombreConMayorTemp;
	var mayorTemp;
	var adultosViudos;
	var cantHombresSolterosViudos;
	var mayoresTempAlta;
	var cantHombresSolteros;
	var edadHombresSolterosAcc;
	var promedioEdadHombresSolteros;
	
	var mensaje;
	var i;
	var pregunta;

	adultosViudos = 0;
	cantHombresSolterosViudos = 0;
	mayoresTempAlta = 0;
	cantHombresSolteros = 0;
	edadHombresSolterosAcc = 0;
	promedioEdadHombresSolteros = 0;
	i=0;

	while(true)
	{
		if(i!=0)
		{
			pregunta = confirm("¿Desea seguir cargando datos?");
			if(!pregunta)
			{
				break;
			}
		}
		else
		{
			i++;
		}

		personaValidada = prompt("Por favor, ingrese el nombre del pasajero.");
		while(typeof(personaValidada) != "string" || personaValidada.length < 2)
		{
			personaValidada = prompt("El dato ingresado es inválido. Inténtelo nuevamente. Por favor, ingrese un nombre válido.");
		}

		edadValidada = prompt("Por favor, ingrese la edad del pasajero. Debe ser menor a 120");
		edadValidada = parseInt(edadValidada);
		while(isNaN(edadValidada) || edadValidada < 0 || edadValidada > 120)
		{
			edadValidada = prompt("El dato ingresado es inválido. Inténtelo nuevamente. Por favor, ingrese una edad entre 0 y 120");
			edadValidada = parseInt(edadValidada);
		}

		sexoValidado = prompt("Por favor, ingrese el sexo del pasajero. Debe ser 'f' para femenino, o 'm' para masculino." );
		while(sexoValidado != "f" && sexoValidado != "m")
		{
			sexoValidado = prompt("El dato ingresado es inválido. Inténtelo nuevamente. Debe ser 'f' para femenino, o 'm' para masculino.");
		}

		estadoCivilValidado = prompt("Por favor, ingrese el estado civil del pasajero. Debe ser soltero, viudo o casado");
		while(estadoCivilValidado != "soltero" && estadoCivilValidado != "casado" && estadoCivilValidado != "viudo")
		{
			estadoCivilValidado = prompt("El dato ingresado es inválido. Inténtelo nuevamente. Debe ser soltero, viudo o casado");
		}

		tempValidada = prompt("Por favor, ingrese la temperatura del pasajero. Debe ser entre 30 y 50 grados.");
		tempValidada = parseInt(tempValidada);
		while(isNaN(tempValidada) || tempValidada < 30 || tempValidada > 50)
		{
			tempValidada = prompt("El dato ingresado es inválido. Inténtelo nuevamente. Debe ser entre 30 y 50 grados.");
			tempValidada = parseInt(tempValidada);
		}

		if(i==1)
		{
		mayorTemp = tempValidada;
		nombreConMayorTemp = personaValidada;
		}
		else 
		{
			if(mayorTemp < tempValidada)
			{
				mayorTemp = tempValidada;
				nombreConMayorTemp = personaValidada;
			}
		}

		if(sexoValidado == "m")
		{
			if(estadoCivilValidado == "soltero")
			{
				cantHombresSolterosViudos++;
				edadHombresSolterosAcc += edadValidada;
				cantHombresSolteros++;
			}
			else
			{
				if(estadoCivilValidado == "viudo")
				{
					cantHombresSolterosViudos++;
				}
			}
		}
	
		if(estadoCivilValidado == "viudo")
		{
			adultosViudos++;
		}

		if(edadValidada > 60 && tempValidada > 38)
		{
			mayoresTempAlta++;
		}

	}

	if(cantHombresSolteros > 0)
	{
		promedioEdadHombresSolteros = edadHombresSolterosAcc / cantHombresSolteros;
		promedioEdadHombresSolteros = promedioEdadHombresSolteros.toFixed();
	}
	
	mensaje = "La persona con mayor temperatura fue " + nombreConMayorTemp + " con " + mayorTemp + " grados.";
	mensaje += "\nLa cantidad de mayores viudos es de " + adultosViudos + ".";
	mensaje += "\nLa cantidad de hombres solteros o viudos es de " + cantHombresSolterosViudos + ".";
	mensaje +=  "\nLa cantidad de personas con más de 60 años y más de 38º de temperatura es de " + mayoresTempAlta + ".";
	mensaje += "\nEl promedio de edad entre los hombres solteros es de " + promedioEdadHombresSolteros + ".";
	alert(mensaje);

}



/*

En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
				 </br>a)
				El nombre de la persona con mas temperatura.
				 </br>b)
				Cuantos mayores de edad estan viudos
				 </br>c)
				La cantidad de hombres que hay solteros  o viudos.
				 </br>d)
				cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura

				 </br>e)
				El promedio de edad entre los hombres solteros.
				</h2>

*/