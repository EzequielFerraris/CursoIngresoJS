/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let i = 0;
	let suma = 0;
	let continuar = true;
	let exp = new RegExp('si', 'i');

	while(continuar) {
		if(i == 0) {
			let dato = prompt("Ingrese un número entero: ");
			suma += parseInt(dato);
			i++;
		}
		else {
			let pregunta = prompt("¿Desea continuar agregando número?");
			if(exp.test(pregunta)) {
				let dato = prompt("Ingrese un número entero: ");
				suma += parseInt(dato);
				i++;
				continue;
			}
			else {
				continuar = false;
				break;
			}
		};
	};
	
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = suma / i;

}//FIN DE LA FUNCIÓN