
let random;
let maquina;
let jugador;
let ganadas = 0;
let perdidas = 0;
let empates = 0;

function actualizar(gana, perd, emp) 
{
	document.getElementById("txtIdEmpatadas").value = emp;
	document.getElementById("txtIdPerdidas").value = perd;
	document.getElementById("txtIdGanadas").value = gana;
};

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
}//FIN DE LA FUNCIÓN

function piedra()
{
	switch(maquina) 
    {
        case "piedra":
            alert("Empate!");
			empates++;
            break;
        case "papel":
            alert("Derrota");
			perdidas++;
            break;
        case "tijera":
            alert("Victoria!");
			ganadas++;
            break;
    };
	actualizar(ganadas, perdidas, empates);	
}//FIN DE LA FUNCIÓN

function papel()
{   
	switch(maquina) 
    {
        case "piedra":
            alert("Victoria!");
			ganadas++;
            break;
        case "papel":
            alert("Empate!");
			empates++;
            break;
        case "tijera":
            alert("Derrota");
			perdidas++;
            break;
    };
	actualizar(ganadas, perdidas, empates);
}//FIN DE LA FUNCIÓN

function tijera()
{
	switch(maquina) 
    {
        case "piedra":
            alert("Derrota");
			perdidas++;
            break;
        case "papel":
            alert("Victoria!");
			ganadas++;
            break;
        case "tijera":
            alert("Empate!");
			empates++;
            break;
    };
	actualizar(ganadas, perdidas, empates);
}//FIN DE LA FUNCIÓN