/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let random;
let maquina;

function comenzar()
{
    random = Math.random() * 2;
    random = Math.floor(random) + 1;

    switch(random) 
    {
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
};//FIN DE LA FUNCIÓN

function piedra()
{
    let mensaje;
	switch(maquina) 
    {
        case "piedra":
            mensaje = "Empate!";
            break;
        case "papel":
            mensaje = "Derrota";
            break;
        case "tijera":
            mensaje = "Victoria!";
            break;
    };
    alert(mensaje);
};//FIN DE LA FUNCIÓN

function papel()
{   
    let mensaje;
	switch(maquina) 
    {
        case "piedra":
            mensaje = "Victoria!";
            break;
        case "papel":
            mensaje = "Empate!";
            break;
        case "tijera":
            mensaje = "Derrota";
            break;
    };
    alert(mensaje);
};//FIN DE LA FUNCIÓN

function tijera()
{
	let mensaje;
    switch(maquina) 
    {
        case "piedra":
            mensaje = "Derrota";
            break;
        case "papel":
            mensaje = "Victoria!";
            break;
        case "tijera":
            mensaje = "Empate!";
            break;
    };
    alert(mensaje);
};//FIN DE LA FUNCIÓN