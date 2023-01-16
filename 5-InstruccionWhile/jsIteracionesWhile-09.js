/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let i = 0;
	let arr = [];
	let continuar = true;
	let exp = new RegExp('si', 'i');

	while(continuar) {
		if(i == 0) {
			let dato = prompt("Ingrese un número entero: ");
			arr.push(parseInt(dato));
			i++;
		}
		else {
			let pregunta = prompt("¿Desea continuar agregando número?");
			if(exp.test(pregunta)) {
				let dato = prompt("Ingrese un número entero: ");
				arr.push(parseInt(dato));
			}
			else {
				continuar = false;
				break;
			};
		};
	};
	
	document.getElementById("txtIdMaximo").value = Math.max(...arr);
	document.getElementById("txtIdMinimo").value = Math.min(...arr);

}//FIN DE LA FUNCIÓN