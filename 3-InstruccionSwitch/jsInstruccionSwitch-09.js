function mostrar(){

	var destino;
	var estacion; 
	var valorBase;
	var precio;
	var mensaje;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;
	valorBase = 15000;


	switch(estacion) {
		case "Invierno":
			switch(destino) {
				case "Cataratas":
				case "Cordoba":
					precio = valorBase; 
					precio -= valorBase * 0.1;
					break;
				case "Mar del plata":
					precio = valorBase; 
					precio -= valorBase * 0.2;
					break;
				case "Bariloche":
					precio = valorBase;
					precio += valorBase * 0.2;
					break;
		};
			break;
		case "Verano":
			switch(destino) {
				case "Cataratas":
				case "Cordoba":
					precio = valorBase 
					precio += valorBase * 0.1;
					break;
				case "Mar del plata":
					precio = valorBase 
					precio += valorBase * 0.2;
					break;
				case "Bariloche":
					precio = valorBase 
					precio -= valorBase * 0.2;
					break;
			};
			break;

		case "Primavera":
		case "Otoño":
			switch(destino) {
				case "Cataratas":
				case "Mar del plata":
				case "Bariloche":
					precio = valorBase 
					precio += valorBase * 0.1;
					break;
				case "Cordoba":
					precio = valorBase;
					break;
			};
			break;
	};

	mensaje = "La estadía cuesta $" + precio;
	alert(mensaje);

};

//Alumno: Ferraris Ezequiel - División H