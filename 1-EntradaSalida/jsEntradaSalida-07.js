/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 



function sumar()
{	
	let numA;
	let numB;

	numA = parseInt(document.getElementById("txtIdNumeroUno").value);

	numB = parseInt(document.getElementById("txtIdNumeroDos").value);

	alert(`La suma es ${numA + numB}`);	
};

function restar()
{
	let numA;
	let numB;

	numA = parseInt(document.getElementById("txtIdNumeroUno").value);
	
	numB = parseInt(document.getElementById("txtIdNumeroDos").value);

	alert(`La diferencia es ${numA - numB}`);
};

function multiplicar()
{ 
	let numA;
	let numB;

	numA = parseInt(document.getElementById("txtIdNumeroUno").value);
	
	numB = parseInt(document.getElementById("txtIdNumeroDos").value);

	alert(`El producto es ${numA * numB}`);
};

function dividir()
{
	let numA; 
	let numB;
	
	numA = parseInt(document.getElementById("txtIdNumeroUno").value);
	
	numB = parseInt(document.getElementById("txtIdNumeroDos").value);

	alert(`El cociente es ${numA / numB}`);
};

