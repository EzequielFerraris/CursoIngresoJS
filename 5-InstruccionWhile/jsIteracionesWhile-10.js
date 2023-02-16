function mostrar(){

	var sumaNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var i;
	var pregunta;
	var numeroValidado;
	var mensaje;

	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;
	promedioPositivos = 0;
	promedioNegativos = 0;
	diferencia = 0;

	i = 0;
	while(true)
	{
		if(i == 0) 
		{
			alert("Bienvenido. Aquí podrá ingresar los números que desee y obtener sus estadísticas.");
			i++;
		}
		else 
		{
			pregunta = prompt("¿Desea seguir agregando números?");
			if(pregunta != "SI" && pregunta != "si" && pregunta != "Si") 
			{
				break;
			};
		};

		numeroValidado = prompt("Por favor, ingrese un número entero. Puede ser positivo o negativo");
		numeroValidado = parseInt(numeroValidado);

		while(isNaN(numeroValidado))
		{
			numeroValidado = prompt("El dato ingresado no es un número entero. Inténtelo nuevamente.");
			numeroValidado = parseInt(numeroValidado);
		}

		if(numeroValidado < 0) 
		{
			sumaNegativos += numeroValidado;
			cantidadNegativos++;
		} 
		else 
		{
			if (numeroValidado > 0) 
			{
				sumaPositivos += numeroValidado;
				cantidadPositivos++;
			} 
			else 
			{
				cantidadCeros++;
			}
		};

		if(numeroValidado % 2 == 0) 
		{
			cantidadPares++;
		};
	};

	if(cantidadPositivos > 0) 
	{
		promedioPositivos = sumaPositivos / cantidadPositivos;
		promedioPositivos = (promedioPositivos).toFixed(2)
	};

	if(cantidadNegativos > 0) 
	{
		promedioNegativos = sumaNegativos / cantidadNegativos;
		promedioNegativos = (promedioNegativos).toFixed(2);
	};

	diferencia = sumaPositivos + sumaNegativos;

	mensaje = "Los datos obtenidos fueron: <br>1-Suma de los negativos: " + sumaNegativos + "<br>2-Suma de los positivos: " + sumaPositivos + "<br>3-Cantidad de positivos: " + cantidadPositivos + "<br>4-Cantidad de negativos: " + cantidadNegativos +  "<br>5-Cantidad de ceros: " + cantidadCeros + "<br>6-Cantidad de números pares: " + cantidadPares +  "<br>7-Promedio de positivos: " + promedioPositivos + "<br>8-Promedios de negativos: " + promedioNegativos + "<br>9-Diferencia entre positivos y negativos: " + diferencia;

	document.write(mensaje); 
};

//Alumno: Ferraris Ezequiel - División H