/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	let numA;
	let numB; 

	numA = parseInt(document.getElementById("txtIdNumeroUno").value);
	
	numB= parseInt(document.getElementById("txtIdNumeroDos").value);

	alert(`La suma es ${numA + numB}`);

};


