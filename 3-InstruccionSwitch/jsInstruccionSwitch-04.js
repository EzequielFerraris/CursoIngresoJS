function mostrar()
{
	var mesDelAño;
	var mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;
	
	switch(mesDelAño) 
	{
		case "Febrero":
			mensaje = "Tiene 28 días.";
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Tiene 30 días.";
		break;
		default:
			mensaje = "Tiene 31 días.";
		break;
	}; 	

	alert(mensaje);
};

//Alumno: Ferraris Ezequiel - División H