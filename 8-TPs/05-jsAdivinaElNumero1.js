/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

//DECLARO VARIABLES COMUNES A AMBAS FUNCIONES (GLOBALES)
var random;
var contador;

function comenzar() 
{
  //DETERMINO MÁXIMO Y MÍNIMO DEL NÚMERO RANDOM
  var max = 100;
  var min = 1;
	//GENERO EL NÚMERO RANDOM
  random = Math.random() * (max - min);
  random = Math.floor(random) + min;
  contador = 0;
  document.getElementById("txtIdIntentos").value = 0;
}

function verificar() 
{
  //DECLARO VARIABLES NECESARIAS PARA EJECUTAR LA FUNCIÓN
  var mensaje;
  var numeroIngresado;
  //TOMO VALORES Y LOS TRANSFORMO DE ACUERDO A LO NECESARIO
  numeroIngresado = document.getElementById("txtIdNumero").value;
  numeroIngresado = parseInt(numeroIngresado);
  //AUMENTO EL CONTADOR PARA DAR CUENTA DE QUE SE HA INTENTADO ADIVINAR Y LO MUESTRO POR EL ELEMENTO TEXT DEL HTML
  contador++;
  document.getElementById("txtIdIntentos").value = contador;
  //CHEQUEO SI EL NÚMERO DEL USUARIO COINCIDE CON EL NÚMERO RANDOM. DETERMINO EL MENSAJE A MOSTRAR DE ACUERDO A LOS INTENTOS REALIZADOS, SI ES EL CASO.
  if(numeroIngresado == random) 
  {
    mensaje = "Excelente, has ganado en " + contador + " intentos! El número era " + random;
  }
  else 
  {
    if(numeroIngresado < random) //SI EL NÚMERO NO COINCIDE
    {
      mensaje = "Falta para el número secreto";
    }
    else 
    {
      mensaje = "Se ha pasado del número secreto";
    }
  }
  //MUESTRO EL MENSAJE
  alert(mensaje);
};