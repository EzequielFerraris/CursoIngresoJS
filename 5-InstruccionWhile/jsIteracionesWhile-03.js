/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let log = true;
	while(log) {
		let claveIngresada = prompt("ingrese la clave de ingreso.");
		if (claveIngresada == "utn750") {
			alert("Bienvenido usuario. La contraseña es correcta.")
			log = false;
		}
		else {
			alert("La contraseña es incorrecta.")
		};
	};
	
}//FIN DE LA FUNCIÓN
