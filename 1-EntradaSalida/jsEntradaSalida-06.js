/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	var numA;
	var numB; 
	var suma;
	var mensaje;

	numA = document.getElementById("txtIdNumeroUno").value;
	numB= document.getElementById("txtIdNumeroDos").value;

	numA = parseInt(numA);
	numB = parseInt(numB);
	suma = numA + numB;

	mensaje = "La suma es ";
	mensaje += suma;

	alert(mensaje);
};


