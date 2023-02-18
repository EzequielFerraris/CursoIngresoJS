/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)


function mostrar()
{
	var claveIngresada;
	var mensaje;
	
	claveIngresada = prompt("Ingrese la clave de ingreso.");

	while(claveIngresada != "utn750") 
	{
		claveIngresada = prompt("La contraseña es incorrecta. Inténtelo nuevamente");
	};	

	mensaje = "La contraseña es correcta. Bienvenido!"

	alert(mensaje);
};
//Alumno: Ferraris Ezequiel - División H

*/

function mostrar()
{
	var claveIngresada;
	var mensaje;
	var contador;
	
	contador = 3;
	claveIngresada = prompt("Ingrese la clave de ingreso.");

	while(claveIngresada != "utn750" && contador > 0) 
	{
		claveIngresada = prompt("La contraseña es incorrecta. Inténtelo nuevamente. Quedan " + (contador - 1) + " intentos.");
		contador--;
	};	

	if(contador == 0)
	{
		mensaje = "La contraseña es incorrecta. Está inhabilitado por 24 hs."
	}
	else
	{
		mensaje = "La contraseña es correcta. Bienvenido!"
	};
	
	alert(mensaje);
};
//Alumno: Ferraris Ezequiel - División H
