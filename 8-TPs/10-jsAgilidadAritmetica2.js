/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */

 let numeroRandom1 = 0;
 let numeroRandom2 = 0;
 let nOperacion = 0;
 let respuestaCorrecta = 0;
 let temporizador = 4000;
 
 //DEBO CREAR UNA FUNCIÓN PARA ACTUALIZAR LOS VALORES EN LOS CUADROS DE TEXTO.
 function actualizar(n1, n2, op) {
     document.getElementById("txtIdPrimerNumero").value = n1;
     document.getElementById("txtIDSegundoNumero").value = n2;
     document.getElementById("txtIdOperador").value = op;
 }

 function comenzar()
 {
 //DEBO GENERAR TRES NÚMEROS ALEATORIOS, DOS ENTRE 1 Y 10, Y 1 ENTRE 1 Y 4 PARA LAS OPERACIONES MATEMÁTCIAS.
     numeroRandom1 = Math.floor(Math.random() * 10 +1);
     numeroRandom2 = Math.floor(Math.random() * 10 +1);
     nOperacion = Math.floor(Math.random() * 4 + 1)
     let operacion;

 //DETERMINO LA OPERACIÓN A PARTIR DEL NÚMERO OBTENIDO Y YA OBTENGO EL RESULTADO.
     switch(nOperacion) {
         case 1:
             respuestaCorrecta = numeroRandom1 + numeroRandom2;
             operacion = "Suma";
             break;
         case 2:
             respuestaCorrecta = numeroRandom1 - numeroRandom2;
             operacion = "Resta";
             break;
         case 3:
             respuestaCorrecta = (numeroRandom1 / numeroRandom2).toFixed(2);
             operacion = "División";
             break;
         case 4:
             respuestaCorrecta = numeroRandom1 * numeroRandom2;
             operacion = "Multiplicación";
             break;
     };
 //LLAMO LA FUNCIÓN ACTUALIZAR
     actualizar(numeroRandom1, numeroRandom2, operacion);
//INICIO EL CONTADOR
     setTimeout(() => {Responder("Se ha acabado el tiempo!")}, temporizador);
 }//FIN DE LA FUNCIÓN
 
 function Responder(text = "empty") {
     //DETERMINO SI LA FUNCIÓN FUE LLAMADA PORQUE SE ACABÓ EL TIEMPO. SI ES ASÍ MUESTRO UN MENSAJE INDICÁNDOLO.
     if(text != "empty") {
        alert(text);
     }
     //TOMO LA RESPUESTA DEL USUARIO.
     let respuestaUsuario = parseFloat(document.getElementById("txtIdRespuesta").value);
     //LA COMPARO CON LA CORRECTA Y DEVUELVO RESULTADO.
        if(respuestaUsuario == respuestaCorrecta) {
            alert("Felicitaciones! La respuesta es correcta");
        }
        else {
            alert(`La respuesta es incorrecta. El resultado correcto es: ${respuestaCorrecta}`);
        };
}//FIN DE LA FUNCIÓN