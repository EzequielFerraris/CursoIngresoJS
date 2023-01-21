function mostrar()
{
	let resultado = "El número no es primo"
	let numero = parseInt(prompt("Ingrese un número para saber si es primo."));
	let contador = 0;

	for(let i=1; i<= numero; i++) {
		if(numero%i == 0) {
			contador++;
			if(contador > 2) {break;};
		}
	}

	if(contador == 2) {resultado = "El número es primo"};

	alert(resultado)
}//FIN DE LA FUNCIÓN