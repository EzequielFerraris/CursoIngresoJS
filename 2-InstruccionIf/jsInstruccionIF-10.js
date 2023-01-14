function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let min = 1;
	let max = 10;
	let random = Math.floor(Math.random() * (max - min)) + min;
	
	if(random < 4) {
		alert(`Vamos, la próxima se puede. Nota: ${random}`);
	}
	else if(random >= 4 && random < 9) {
		alert(`APROBÓ.  Nota: ${random}`);
	}
	else {
		alert(`EXCELENTE.  Nota: ${random}`);
	};

}//FIN DE LA FUNCIÓN