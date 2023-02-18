/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	var cantidadNumeros;
	var numeroIngresado;
	var suma;
	var promedio;
	var pregunta;

	cantidadNumeros = 0;
	suma = 0;
	promedio = 0;

	while(true)
	{
		if(cantidadNumeros > 0) 
		{
			pregunta = confirm("¿Desea seguir ingresando números?")
			if(!pregunta)
			{
				break;
			}
		}

		//Esto originalmente era:
		/*
		pregunta = prompt("¿Desea seguir ingresando números? (SI/NO)");
			pregunta = pregunta.toLowerCase();
			if(pregunta != "si")
			{
				break;
			}
		*/

		numeroIngresado = prompt("Por favor, ingrese un número entero.");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)) 
		{
			numeroIngresado = prompt("El dato ingresado es inválido, por favor, ingrese un número entero.");
			numeroIngresado = parseInt(numeroIngresado);
		}
		
		suma += numeroIngresado;
		cantidadNumeros++;
	}
	
	promedio = suma / cantidadNumeros;
	promedio = promedio.toFixed(2);

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
};

//Alumno: Ferraris Ezequiel - División H