
function mostrar()
{

	var numero;
	var contador;
	var mensaje;

	numero = prompt("Ingrese un número para conocer todos los divisores del mismo.");
	numero = parseInt();
	contador = 0;

	for(let i = 1; i <= numero; i++) 
	{
		if(numero % i == 0) 
		{
			console.log("Número divisor: "+ i); //SOLO PARA VERIFICAR QUE FUNCIONA
			contador++;
		}
	}

	mensaje = "Cantidad de números divisores: " + contador;
	console.log(mensaje);

}
//Alumno: Ferraris Ezequiel - División H