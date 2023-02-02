function mostrar(){
	let i = 0;
	let suma = 0;

	while(i < 5) {
		let dato = prompt("Ingrese un número entero: ");
		suma += parseInt(dato);
		i++;
	};
	
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = suma / i;
};
//Alumno: Ferraris Ezequiel - División H