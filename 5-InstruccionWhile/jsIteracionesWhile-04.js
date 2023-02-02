
function mostrar(){
	let clave = true;
	while(clave) {
		let numero = parseInt(prompt("ingrese un número entre 0 y 10."));
		if (numero <=10 && numero >=0) {
			alert(`El número es ${numero} y está entre 1 y 10.`);
			clave = false;
		}
		else {
			alert("No se trata de un número entre 1 y 10.");
		};
	};
};
//Alumno: Ferraris Ezequiel - División H