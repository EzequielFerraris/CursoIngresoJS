/*
Al presionar el botón pedir números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{

	var i;
	var flag;
	var suma;
	var mult;
	var pregunta;
	var datoIngresado;

	i = 0;
	flag = 0;
	suma = 0;
	mult = 1;
	
	while(true)
	{
		if(i != 0) 
		{
			pregunta = prompt("¿Desea continuar agregando números?");
			pregunta = pregunta.toLowerCase();
			if(pregunta != "si") 
			{
				break;
			}
		}

		datoIngresado = prompt("Ingrese un número entero: ");
		datoIngresado = parseInt(datoIngresado);

			while(isNaN(datoIngresado)) 
			{
				datoIngresado = prompt("El dato ingresado es incorrecto. Ingrese un número entero.");
				datoIngresado = parseInt(datoIngresado);
			}

			if (datoIngresado < 0) 
			{
				mult *= datoIngresado;
				flag = 1;
			}
			else 
			{
				suma += datoIngresado;
			}
		i=1;
	}
	
	document.getElementById("txtIdSuma").value = suma;
	
	if(flag == 0) 
	{
		mult = 0;
	}
	
	document.getElementById("txtIdProducto").value = mult;
	
};

//Alumno: Ferraris Ezequiel - División H