
function mostrar()
{
	var sexo;
	
	sexo = prompt("Por favor, ingrese su sexo ('f' para femenino y 'm' para masculino)");

	while(sexo != "f" && sexo != "m")
	{
		sexo = prompt("El dato ingresado no es válido. Inténtelo nuevamente. Ingrese su sexo ('f' para femenino y 'm' para masculino)");
	};

	document.getElementById("txtIdSexo").value = sexo;

};
//Alumno: Ferraris Ezequiel - División H