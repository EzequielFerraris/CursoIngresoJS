function mostrar()
{
	let numero;
	for(let i=0; i > -1; i++) {
		numero = parseInt(prompt("Ingrese un número: "));
		alert(`Usted ha ingresado el numero ${numero}`);
		if(numero == 9) {
			break;
		}
	}
	

}//FIN DE LA FUNCIÓN