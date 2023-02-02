function mostrar()
{
	let min;
	let max;
	let numeroRandom;

	min = 1;
	max = 10;
	numeroRandom = Math.floor(Math.random() * (max - min)) + min;
	
	if(numeroRandom < 4) {
		alert(`Vamos, la próxima se puede. Nota: ${numeroRandom}`);
	}
	else if(numeroRandom >= 4 && numeroRandom < 9) {
		alert(`APROBÓ.  Nota: ${numeroRandom}`);
	}
	else {
		alert(`EXCELENTE.  Nota: ${numeroRandom}`);
	};
};