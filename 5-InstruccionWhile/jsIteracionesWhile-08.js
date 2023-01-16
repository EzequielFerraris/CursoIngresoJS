/*
Al presionar el botón pedir números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let i = 0;
	let suma = 0;
	let mult = 1;
	let continuar = true;
	let exp = new RegExp('si', 'i');

	while(continuar) {
		if(i == 0) {
			let dato = prompt("Ingrese un número entero: ");
			if (dato >= 0) {
				suma += parseInt(dato);
				i++;
			}
			else {
				mult *= parseInt(dato);
				i++;
			};
		}
		else {
			let pregunta = prompt("¿Desea continuar agregando número?");
			if(exp.test(pregunta)) {
				let dato = prompt("Ingrese un número entero: ");
				if (dato >= 0) {
					suma += parseInt(dato);
				}
				else {
					mult *= parseInt(dato);
				};
			}
			else {
				continuar = false;
				break;
			};
		};
	};
	
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdProducto").value = mult;
}//FIN DE LA FUNCIÓN