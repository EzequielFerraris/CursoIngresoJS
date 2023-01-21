/*3.		Un palíndromo (del griego palin dromein, volver a ir atrás)
				  	<br>	Es una palabra, número o frase que se lee igual adelante que atrás.
				  	<br>Si se trata de un numeral, usualmente en notación indoarábiga, se llama capicúa. 

					<br>	debemos poder identificar las frases numeros o palabras que son palindromos

					<br> 1°: De la cadena original , buscamos los espacios y los eliminamos.
					<br> 2°: La palabra original ,le invertimos el orden de las letras
					<br> 3°: Comparamos las dos cadenas y si son iguales , es un palindromo.

observaciones: el ejercicio pretende explicar el length de los string y un recorrido sobre una cadena.
Temas que quedan fuera del alcance deseado:
  1- como sacar los carateres que no son letras
  2- como cambiar las vocales con acento
  3- las letras mayusculas
  4- vectores
*/
function verificarPalindromo () 
{
	let palabraIngresada = document.getElementById("txtIdPalabra").value;
	let palabraLimpia;
	let palabraInvertida;

//CREO REG EXP PARA ELIMINAR ESPACIOS Y SIMBOLOS QUE NO SON NUMEROS O LETRAS
	let espacios = /\s+/g;
	let simbolos = /[\W_]+/gi

	palabraLimpia = palabraIngresada.replace(espacios, "");
	palabraLimpia = palabraLimpia.replace(simbolos, "");

	let array1 = [...palabraLimpia];
	array1 = array1.reverse();
	palabraInvertida = array1.reduce((acc, x) => acc.concat(x), "")

	document.getElementById("txtIdPalabraInvertida").value = palabraInvertida;

	let condition = palabraLimpia == palabraInvertida;

	condition ? alert("Es un palíndromo"): alert("No es un palíndromo");
	
};

/* 
algunos palindromos para testear:
neuquen
luz azul
a ti no bonita
amad a la dama
ateo poco poeta
la ruta natural
la tele letal
*/