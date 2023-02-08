
function mostrarAumento() {
	var importe;
	var nuevoImporte;
	var descuento;

	descuento = prompt("Por favor, ingrese el porcentaje de descuento correspondiente (en porcentaje): ");

	importe = document.getElementById("txtIdImporte").value;
	importe = parseFloat(importe);
	nuevoImporte = importe - (importe * descuento / 100);
	
	document.getElementById("txtIdResultado").value = nuevoImporte;
	
};
//ALUMNO: FERRARIS EZEQUIEL - DIVISIÓN H