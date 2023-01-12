/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    let anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);
    let perimetro = (largoTerreno + anchoTerreno) * 2;
    let alambre = (perimetro * 3).toFixed(2);
    
    alert(`Se necesitan ${alambre} metros de alambre`);

}
function Circulo () 
{
    let radioTerreno = parseFloat(document.getElementById("txtIdRadio").value);
	let perimetro = radioTerreno * 2 * Math.PI;
    let alambre = (perimetro * 3).toFixed(2);

    alert(`Se necesitan ${alambre} metros de alambre`);
}
function Materiales () 
{
    let largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    let anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);
    let area = largoTerreno * anchoTerreno;
    //Para las bolsas, devuelvo el entero cercano más grande para que no falte material.
    let cemento = Math.ceil(area * 2);
    let cal = Math.ceil(area * 3);

    alert(`Se necesitan ${cemento} bolsas de cemento y ${cal} bolsas de cal`);
}