function mostrar()
{
	var resultado;
	var numero;
	var contador;

	resultado = "El número no es primo";
	numero = prompt("Ingrese un número para saber si es primo.");
	numero = parseInt(numero);
	contador = 0;

	for(let i=1; i <= numero; i++) 
	{
		if(numero % i == 0) 
		{
			contador++;

			if(contador > 2)
			{
				break;
			}
		}
	}

	if(contador == 2) 
	{
		resultado = "El número es primo";
	}

	alert(resultado)
}

//Alumno: Ferraris Ezequiel - División H