/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento() {
	let sueldo;
	let nuevoSueldo;

	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

	nuevoSueldo = sueldo + (sueldo * 0.1);
	document.getElementById("txtIdResultado").value = nuevoSueldo;

};
