var miIntervalo ;
var contador;


function inicio()
{
	contador=0;
	alert("Función inicio.");
	miIntervalo = setInterval(SegundosEnElAire, 2000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {

	contador = contador +1;
    alert("Bienvenido a la UTN FRA, cantidad = "+contador);
    if (contador==5)
    {
    	clearInterval(miIntervalo);
    };
}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	alert("Función fin.");
	clearInterval(miIntervalo);

}//FIN DE LA FUNCIÓN fin