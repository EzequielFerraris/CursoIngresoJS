function mostrar(){
	
	let destino;
	let estacion;
	let mensaje1;
	let mensaje2;

	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;
	mensaje1 = "No se viaja";
	mensaje2= "Se viaja";

	switch(estacion) {
		case "Invierno":
			switch(destino) {
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
					alert(`${mensaje1}`);
					break;
				case "Bariloche":
					alert(`${mensaje2}`);
					break;
		};
			break;

		case "Verano":
			switch(destino) {
				case "Cordoba":
				case "Bariloche":
					alert(`${mensaje1}`);
					break;
				case "Cataratas":
				case "Mar del plata":
					alert(`${mensaje2}`);
					break;
			};
			break;

		case "Primavera":
			switch(destino) {
				case "Bariloche":
					alert(`${mensaje1}`);
					break;
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
					alert(`${mensaje2}`);
					break;
			};
			break;

		case "Otoño":
			switch(destino) {
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
				case "Bariloche":
					alert(`${mensaje2}`);
					break;
			};
			break;
	};
};

//Alumno: Ferraris Ezequiel - División H
