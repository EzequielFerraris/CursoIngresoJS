function mostrar()
{
	var edad; 
	var estadoCivil;
	var mensaje;
	
	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;
	mensaje = "Es muy pequeño para NO ser soltero.";

	edad = parseInt(edad);
	
	if(edad < 18 && (estadoCivil != "Soltero" || estadoCivil != "soltero")) {
		alert(mensaje);
	};	
};