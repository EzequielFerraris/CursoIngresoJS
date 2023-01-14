/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let random;
let contador;


function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  random = Math.floor(Math.random() * (100)) + 1;
  contador = 0;
}

function verificar()
{
  let numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);

  contador ++;
  document.getElementById("txtIdIntentos").value = contador;
  
  if(numeroIngresado == random) {
    alert(`Excelente, has ganado en ${contador} intentos! El número era ${random}`);
  }
  else if(numeroIngresado < random) {
    alert("Falta para el número secreto");
  }
  else {
    alert("Se ha pasado del número secreto");
  };
}