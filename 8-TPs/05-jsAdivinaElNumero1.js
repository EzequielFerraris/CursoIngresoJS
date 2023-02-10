/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

var random;
var contador;
var max = 100;
var min = 1;
var mensaje;
var numeroIngresado;

function comenzar() {
	//Genero el número RANDOM entre 1 y 100
  random = Math.random() * (max - min);
  random = Math.floor(random) + min;
  contador = 0;
  document.getElementById("txtIdIntentos").value = 0;
}

function verificar() {

  numeroIngresado = document.getElementById("txtIdNumero").value;
  numeroIngresado = parseInt(numeroIngresado);

  contador++;
  document.getElementById("txtIdIntentos").value = contador;
  
  if(numeroIngresado == random) {
    mensaje = "Excelente, has ganado en " + contador + " intentos! El número era " + random;
  }
  else if(numeroIngresado < random) {
    mensaje = "Falta para el número secreto";
  }
  else {
    mensaje = "Se ha pasado del número secreto";
  };

  alert(mensaje);
};