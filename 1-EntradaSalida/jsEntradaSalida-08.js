/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto(){
	let numA;
	let numB;

	numA = parseInt(document.getElementById("txtIdNumeroDividendo").value);
    
	numB = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	
	alert(`El resto es ${numA % numB}`);

};
