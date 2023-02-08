/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

/*
function mostrar(){
	var nombreIngresado; 
	
	nombreIngresado = document.getElementById("txtIdNombre").value;
	
	alert(nombreIngresado);

	document.getElementById("txtIdNombre").value = "";
	
};
*/

function mostrar() {

  var importeIngresado;
  var iva;
  var descuento;
  var importeConIva;
  var importeFinal;
  var mensaje;

  importeIngresado = document.getElementById("txtIdNombre").value;
  iva = 0.21;
  descuento = 0.05;

  importeIngresado = parseFloat(importeIngresado);
  iva *= importeIngresado;
  importeConIva = importeIngresado + iva;
  descuento = importeConIva * descuento;
  descuento = descuento.toFixed(2);
  importeFinal = importeConIva - descuento;

  mensaje = "El importe bruto es de: $" + importeIngresado + ".\nEl IVA grabado es de $" + iva + ".\nEl importe con IVA es de $" + importeConIva + "\nEl importe descontado es de: $" + descuento + "\nEl importe final es de $" + importeFinal;

  alert(mensaje);
};

