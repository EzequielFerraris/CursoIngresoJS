/*
Al presionar el botón pedir números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let i = 0;
	let flag = 0;
	let suma = 0;
	let mult = 1;
	let continuar = true;
	let exp = new RegExp('si', 'i');

	do {
		if(i != 0) {
			let pregunta = prompt("¿Desea continuar agregando números?");
			if(!exp.test(pregunta)) {
				continuar = false;
				break;
			}
		};
		let dato = prompt("Ingrese un número entero: ");
			dato = parseInt(dato);
			if (dato >= 0) {
				suma += parseInt(dato);
			}
			else {
				mult *= parseInt(dato);
				flag = 1;
			};	
		i++;
	}
	while(continuar);
	
	document.getElementById("txtIdSuma").value = suma;
	if(flag == 0) {
		mult = 0;
	};
		
	document.getElementById("txtIdProducto").value = mult;

}//FIN DE LA FUNCIÓN