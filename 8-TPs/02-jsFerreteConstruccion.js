/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () {

    var largoTerreno;
    var anchoTerreno;
    var perimetro;
    var alambre;

    largoTerreno = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    perimetro = (largoTerreno + anchoTerreno) * 2;
    alambre = (perimetro * 3);
    alambre = alambre.toFixed(2);
    
    alert("Se necesitan " + alambre +  " metros de alambre");

}
function Circulo () {
    var radioTerreno;
    var perimetro;
    var alambre;

    radioTerreno = document.getElementById("txtIdRadio").value;
    radioTerreno = parseFloat(radioTerreno);


	perimetro = radioTerreno * 2 * Math.PI;
    alambre = (perimetro * 3);
    alambre = alambre.toFixed(2);

    alert("Se necesitan " + alambre + "metros de alambre");
};

function Materiales () {
    var largoTerreno;
    var anchoTerreno;
    var area;
    var cemento;
    var cal;

    largoTerreno = document.getElementById("txtIdLargo").value;
    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = document.getElementById("txtIdAncho").value;
    anchoTerreno = parseFloat(anchoTerreno);

    area = largoTerreno * anchoTerreno;

    //Para las bolsas, devuelvo el entero cercano más grande para que no falte material.
    cemento = area * 2
    cemento = Math.ceil(cemento);
    cal = area * 3;
    cal = Math.ceil(cal);

    alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
};

//ALUMNO: FERRARIS EZEQUIEL - DIVISIÓN H