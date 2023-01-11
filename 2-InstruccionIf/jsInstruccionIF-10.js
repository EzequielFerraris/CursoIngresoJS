function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let random = Math.floor(Math.random() * 10) + 1;
	
	if(random < 4) {
		alert("Vamos, la próxima se puede");
	}
	else if(random >= 4 && random < 9) {
		alert("APROBÓ");
	}
	else {
		alert("EXCELENTE");
	};

}//FIN DE LA FUNCIÓN