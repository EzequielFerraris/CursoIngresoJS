/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
let colorSecreto;
let comienzo;
let final;

function comenzar(){
//DETERMINO EL COLOR SECRETO ALEATORIO.
let nOperacion = Math.floor(Math.random() * 6 + 1);
switch(nOperacion) {
    case 1:
        colorSecreto = "azul";
        break;
    case 2:
        colorSecreto = "amarillo";
        break;
    case 3:
        colorSecreto = "marron";
        break;
    case 4:
        colorSecreto = "verde";
        break;
    case 5:
        colorSecreto = "celeste";
        break;
    case 6:
        colorSecreto = "rojo";
        break;
};
//RENDERIZO EL COLOR EN EL CUADRO DE TEXTO.
document.getElementById("txtIdColorElegido").value = colorSecreto;
//MARCO EL INICIO DEL CRONOMETRO.
comienzo = new Date();
};//FIN DE LA FUNCIÓN
function Responder(colorParametro) {
//MARCO EL FINAL DEL CRONOMETRO.
    final = new Date();
    let tiempoTotal = final - comienzo;
    tiempoTotal = (tiempoTotal / 1000).toFixed(2);
//COMPARO EL COLOR ELEGIDO POR EL USUARIO CON EL COLOR SECRETO.
	if(colorParametro == colorSecreto) {
        alert(`Correcto! Usted tardó ${tiempoTotal} segundos en responder.`);
    }
    else {
        alert(`La respuesta es incorrecta. Usted tardó ${tiempoTotal} segundos en responder.`);
    };

};//FIN DE LA FUNCIÓN
