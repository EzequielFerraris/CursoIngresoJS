/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var contador;
var random;

function comenzar() {
  
  const MIN = 1;
  const MAX = 100;

//Genero el número RANDOM entre 1 y 100
  random = Math.random() * (MAX - MIN);	
  random = Math.floor(random) + MIN
  contador = 0;
  document.getElementById("txtIdIntentos").value = 0;

}

function verificar() {
  var numeroIngresado;
  var mensaje;

  numeroIngresado = document.getElementById("txtIdNumero").value;
  numeroIngresado = parseInt(numeroIngresado);
  contador ++;
  document.getElementById("txtIdIntentos").value = contador;
  
  if(numeroIngresado == random) {
    switch(contador) {
      case 1:
        mensaje = "Has ganado en 1 intento! Usted es un psíquico.";
        break;
      case 2:
        mensaje = "Has ganado en " + contador + " intentos! Excelente percepción.";
        break;
      case 3:
        mensaje = "Has ganado en " + contador + " intentos! Esto es suerte.";
        break;
      case 4:
        mensaje = "Has ganado en " + contador + " intentos! Excelente técnica.";
        break;
      case 5:
        mensaje = "Has ganado en " + contador + " intentos! Usted está en la media.";
        break;
      case 6:
      case 7:
      case 8:
      case 9:
      case 10: 
        mensaje = "Has ganado en " + contador + " intentos! Falta técnica.";
        break;
      default:
        mensaje = "Has ganado en " + contador + " intentos! Afortunado en el amor!!";
        break;
    };
  }
  else if(numeroIngresado < random) {
    mensaje ="Falta para el número secreto";
  }
  else {
    mensaje ="Se ha pasado del número secreto";
  };

  alert(mensaje);
}