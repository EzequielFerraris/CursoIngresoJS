function mostrar()
{
	let numero = parseInt(prompt("Ingrese un número para conocer todos los números pares menores al mismo."))
	let contador = 0;

	for(let i=0; i<= numero; i++) {
		if(i%2 == 0) {
			console.log("Número: "+i);
			contador++;
		}
	}
	console.log("Cantidad de números pares: " + contador);

}//FIN DE LA FUNCIÓN