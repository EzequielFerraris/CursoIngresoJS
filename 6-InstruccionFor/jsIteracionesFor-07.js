function mostrar()
{

	let numero = parseInt(prompt("Ingrese un número para conocer todos los divisores del mismo."))
	let contador = 0;

	for(let i=1; i<= numero; i++) {
		if(numero%i == 0) {
			console.log("Número divisor: "+i);
			contador++;
		}
	}
	console.log("Cantidad de números divisores: " + contador);


}//FIN DE LA FUNCIÓN