/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
let numeroRandom1 = 0;
let numeroRandom2 = 0;
let nOperacion = 0;
let respuestaCorrecta = 0;


//DEBO CREAR UNA FUNCIÓN PARA ACTUALIZAR LOS VALORES EN LOS CUADROS DE TEXTO.
function actualizar(n1, n2, op) {
    document.getElementById("txtIdPrimerNumero").value = n1;
    document.getElementById("txtIdSegundoNumero").value = n2;
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

}//FIN DE LA FUNCIÓN

function Responder() {
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
