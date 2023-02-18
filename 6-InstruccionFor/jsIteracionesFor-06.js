function mostrar()
{
	var numero;
	var contador;
	var mensaje;

	numero = parseInt("Ingrese un número para conocer todos los números pares menores al mismo.")
	numero = parseInt(numero);
	contador = 0;

	for(let i=0; i <= numero; i++) 
	{
		if( i%2 == 0) 
		{
			console.log("Número: " + i); //SOLO PARA VERIFICAR QUE FUNCIONA
			contador++;
		}
	}

	mensaje = "Cantidad de números pares: " + contador;
	console.log(mensaje);

}
//Alumno: Ferraris Ezequiel - División H
