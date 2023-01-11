/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{	
	let value = prompt("Ingrese un nombre: ");

	document.getElementById("txtIdNombre").value = value;

	alert("ok");
};

