function mostrar()
{
	let destino = document.getElementById("txtIdDestino").value;
	let estacion = document.getElementById("txtIdEstacion").value;
	let mensaje1 = "No se viaja";
	let mensaje2= "Se viaja";

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

}//FIN DE LA FUNCIÓN