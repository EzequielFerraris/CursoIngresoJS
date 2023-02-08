/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto(){

	var numA;
	var numB;
	var resto;

	numA = document.getElementById("txtIdNumeroDividendo").value;
	numB = document.getElementById("txtIdNumeroDivisor").value;

	numA = parseInt(numA);
	numB = parseInt(numB);

	resto = numA % numB;
	
	alert("El resto entre ambos es de " + resto);

};
//ALUMNO: FERRARIS EZEQUIEL - DIVISIÓN H