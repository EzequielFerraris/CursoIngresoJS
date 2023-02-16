function mostrar()
{
	var i;
	var suma;
	var numeroIngresado;
	var promedio;
	
	i = 0;
	suma = 0;

	while(i < 5) 
	{
		numeroIngresado = prompt("Ingrese un número entero: ");
		numeroIngresado = parseInt(numeroIngresado);
		if(isNaN(numeroIngresado) || numeroIngresado < 1)
		{
			alert("El dato ingresado es inválido");
			continue;
		}
		suma += numeroIngresado;
		i++;
	};
	
	promedio = suma / 5;
	promedio = promedio.toFixed(2);

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
};
//Alumno: Ferraris Ezequiel - División H