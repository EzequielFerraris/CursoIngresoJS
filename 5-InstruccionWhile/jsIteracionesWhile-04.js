
function mostrar()
{
	var valor; 
	var mensaje;

	valor = prompt("Ingrese un número entre 0 y 10.");
	valor = parseInt(valor);

	while(valor < 0 || valor > 9) 
	{
		valor = prompt("El número ingresado no está entre 0 y 9. Inténtelo nuevamente:");
	};

	mensaje = "El valor es correcto. Bienvenido."
	alert(mensaje);
};
//Alumno: Ferraris Ezequiel - División H