function mostrar()
{
	var numero;
	var mensaje;

	for(let i=0; i < 100; i++) 
	{
		numero = parseInt(prompt("Ingrese un número: "));
		mensaje = "Usted ha ingresado el numero " + numero;
		alert(mensaje);

		if(numero == 9) 
		{
			break;
		}
	}
}

//Alumno: Ferraris Ezequiel - División H