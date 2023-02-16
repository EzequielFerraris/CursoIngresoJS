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
	var condition;

	cantidadNumeros = 0;
	suma = 0;
	promedio = 0;
	condition = true;

	while(condition)
	{
		if(cantidadNumeros > 0) 
		{
			pregunta = prompt("¿Desea seguir ingresando números? (SI/NO)");
			if(pregunta != "si" && pregunta != "SI" && pregunta != "Si")
			{
				condition = false;
				break;
			}
		}

		numeroIngresado = prompt("Por favor, ingrese un número entero.");
		numeroIngresado = parseInt(numeroIngresado);
		while(isNaN(numeroIngresado)) 
		{
			numeroIngresado = prompt("El dato ingresado es inválido, por favor, ingrese un número entero.");
			numeroIngresado = parseInt(numeroIngresado);
		};
		suma += numeroIngresado;
		cantidadNumeros++;
	}
	
	promedio = suma / cantidadNumeros;
	promedio = promedio.toFixed(2);

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
};
//Alumno: Ferraris Ezequiel - División H