/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let random;
let maquina;
let jugador;

function comenzar()
{
    random = Math.floor(Math.random() * 2) + 1;
    switch(random) {
        case 1:
            maquina = "piedra";
            break;
        case 2:
            maquina = "papel";
            break;
        case 3:
            maquina = "tijera";
            break;
    }
}//FIN DE LA FUNCIÓN

function piedra()
{
	switch(maquina) {
        case "piedra":
            alert("Empate!");
            break;
        case "papel":
            alert("Derrota");
            break;
        case "tijera":
            alert("Victoria!");
            break;
    };

}//FIN DE LA FUNCIÓN
function papel()
{   
	switch(maquina) {
        case "piedra":
            alert("Victoria!");
            break;
        case "papel":
            alert("Empate!");
            break;
        case "tijera":
            alert("Derrota");
            break;
    };

}//FIN DE LA FUNCIÓN
function tijera()
{
	switch(maquina) {
        case "piedra":
            alert("Derrota");
            break;
        case "papel":
            alert("Victoria!");
            break;
        case "tijera":
            alert("Empate!");
            break;
    };

}//FIN DE LA FUNCIÓN