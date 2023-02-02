function mostrar(){

	let destino;
	let estacion; 
	let valorBase;
	let precio;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;
	valorBase = 15000;
	precio;

	switch(estacion) {
		case "Invierno":
			switch(destino) {
				case "Cataratas":
				case "Cordoba":
					precio = valorBase - valorBase * 0.10;
					alert(`La estadía cuesta $${precio}`);
					break;
				case "Mar del plata":
					precio = valorBase - valorBase * 0.20;
					alert(`La estadía cuesta $${precio}`);
					break;
				case "Bariloche":
					precio = valorBase + valorBase * 0.2;
					alert(`La estadía cuesta $${precio}`);
					break;
		};
		break;

		case "Verano":
			switch(destino) {
				case "Cataratas":
				case "Cordoba":
					precio = valorBase + valorBase * 0.10;
					alert(`La estadía cuesta $${precio}`);
					break;
				case "Mar del plata":
					precio = valorBase + valorBase * 0.20;
					alert(`La estadía cuesta $${precio}`);
					break;
				case "Bariloche":
					precio = valorBase - valorBase * 0.20;
					alert(`La estadía cuesta $${precio}`);
					break;
			};
			break;

		case "Primavera":
		case "Otoño":
			switch(destino) {
				case "Cataratas":
				case "Mar del plata":
				case "Bariloche":
					precio = valorBase + valorBase * 0.10;
					alert(`La estadía cuesta $${precio}`);
					break;
				case "Cordoba":
					alert(`La estadía cuesta $${valorBase}`);
					break;
			};
		break;
	};
};

//Alumno: Ferraris Ezequiel - División H