
function mostrar() 
{
	var max;
	var min;
	var i;
	var datoIngresado;
	var pregunta;

	i = 0;

	while(true)
	{
		//PRIMERA ITERACIÓN. MENSAJE AL USUARIO
		if(i==0) 
		{
			alert("Bienvenido, aquí podrá ingresar sus números para obtener el máximo y mínimo.");
			i++;
		}
		else 
		{ //A PARTIR DE LA SEGUNDA ITERACIÓN. CONTINUAR O ROMPER LA ESTRUCTURA ITERATIVA
			pregunta = confirm("¿Desea continuar agregando datos?");
			if(!pregunta)
			{
				break;
			}
			
			/*
			Esto podría ser así también:

			pregunta = prompt("¿Desea seguir agregando números?");
			pregunta = pregunta.toLowerCase();
			if(pregunta != "si") 
			{
				break;
			}

			*/
		}

		//COMÚN A AMBOS CASOS. PIDO EL NÚMERO Y LO VALIDO
		datoIngresado = prompt("Ingrese un número entero:");
		datoIngresado = parseInt(datoIngresado);
		while(isNaN(datoIngresado)) 
		{
			datoIngresado = prompt("El dato ingresado es inválido. Ingrese un número entero");
			datoIngresado = parseInt(datoIngresado);
		}

		//SI EL DATO ES NÚMERO, O LO ASIGNO (SI ES EL PRIMER DATO), O LO COMPARO PARA ASIGNARLO SI CORRESPONDE.
		if(isNaN(min)) 
		{
			min = datoIngresado;
			max = datoIngresado;
		}
		else
		{
			if (min > datoIngresado) 
			{
				min = datoIngresado;
			}
			if (max < datoIngresado) 
			{
				max = datoIngresado;
			}	
		}
	}
	
	//MUESTRO LOS DATOS EN EL HTML
	document.getElementById("txtIdMaximo").value = max;
	document.getElementById("txtIdMinimo").value = min;
}; 

//Alumno: Ferraris Ezequiel - División H
