/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


function Sumar () 
{
	let precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
   
    alert(precio1 + precio2 + precio3);

};
function Promedio () 
{
	let precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
   
    alert(((precio1 + precio2 + precio3) / 3).toFixed(2));
};
function PrecioFinal () 
{
	let precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    let precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    
    let resultado = (precio1 + precio2 + precio3)
    resultado += resultado * 0.21

    alert(resultado.toFixed(2));
};