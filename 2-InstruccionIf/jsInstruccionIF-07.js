function mostrar()
{
	let edad; 
	let estadoCivil;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && (estadoCivil != "Soltero" || estadoCivil != "soltero")) {
		alert("Es muy pequeño para NO ser soltero.");
	};	
};