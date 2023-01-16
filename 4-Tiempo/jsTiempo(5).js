let miTemporizador;
let contador=0;

function inicio()
{
	alert("Función inicio.");
	miTemporizador = setTimeout(SegundosEnElAire, 3000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {


    alert("Bienvenido a la UTN FRA");
   
}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	alert("Función fin.");
	clearTimeout(miIntervalo);

}//FIN DE LA FUNCIÓN fin