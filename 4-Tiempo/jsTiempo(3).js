var miIntervalo ;
var contador=0;

function inicio()
{
	alert("Función inicio.");
	miIntervalo = setInterval(SegundosEnElAire, 2000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {

	contador=contador +1;
    alert("Bienvenido a la UTN FRA, cantidad = " + contador);
    
}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	alert("Función fin.");
	clearInterval(miIntervalo);

}//FIN DE LA FUNCIÓN 