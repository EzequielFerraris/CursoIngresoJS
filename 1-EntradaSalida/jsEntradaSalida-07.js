/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar(){	
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

function restar()
{
	var numA;
	var numB;
	var resta;
	var mensaje;
	
	numA = document.getElementById("txtIdNumeroUno").value;
	numB= document.getElementById("txtIdNumeroDos").value;

	numA = parseInt(numA);
	numB = parseInt(numB);

	resta = numA - numB;

	mensaje = "La diferencia es ";
	mensaje += resta;

	alert(mensaje);
};

function multiplicar()
{ 
	var numA;
	var numB;
	var producto;
	var mensaje;

	numA = document.getElementById("txtIdNumeroUno").value;
	numB= document.getElementById("txtIdNumeroDos").value;

	numA = parseInt(numA);
	numB = parseInt(numB);

	producto = numA * numB;

	mensaje = "El producto es ";
	mensaje += producto;

	alert(mensaje);

};

function dividir()
{
	var numA;
	var numB;
	var division;
	var mensaje;

	numA = document.getElementById("txtIdNumeroUno").value;
	numB= document.getElementById("txtIdNumeroDos").value;

	numA = parseInt(numA);
	numB = parseInt(numB);

	division = (numA / numB).toFixed(2);
	mensaje = "El cociente es ";
	mensaje += division;

	alert(mensaje);
};

//Alumno: Ferraris Ezequiel - División H