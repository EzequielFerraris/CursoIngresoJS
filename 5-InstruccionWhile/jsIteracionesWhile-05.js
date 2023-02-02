
function mostrar(){

	let clave = true;
	while(clave) {
		let sexo = prompt("Por favor, ingrese su sexo ('f' para femenino y 'm' para masculino)");
		if (sexo == "f" || sexo == "m") {
			alert(`Se ha ingresado \"${sexo}\". Muchas gracias.`)
			document.getElementById("txtIdSexo").value = sexo;
			clave = false;
		}
		else {
			alert("El dato ingresado no es válido. Inténtelo nuevamente.")
		};
	};
};
//Alumno: Ferraris Ezequiel - División H