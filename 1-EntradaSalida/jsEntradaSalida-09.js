/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
	let sueldo = parseInt(txtIdSueldo.value);
	let nuevoSueldo = sueldo + (sueldo * 0.1);
	txtIdResultado.value = nuevoSueldo;
};
