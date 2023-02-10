/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () {
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var mensaje;

	precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);
   
    suma = precio1 + precio2 + precio3;
    mensaje = "La suma es: " + suma;

    alert(mensaje);

};

function Promedio () {

    var precio1;
    var precio2;
    var precio3;
    var suma;
    var promedio;
    var mensaje;

	precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);
   
    suma = precio1 + precio2 + precio3;
    promedio = (suma / 3).toFixed(2);
    mensaje = "El promedio es: " + promedio;

    alert(mensaje);
};

function PrecioFinal () {
    var precio1;
    var precio2;
    var precio3;
    var suma;
    var resultado;
    var mensaje;

	precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;
    
    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    suma = precio1 + precio2 + precio3;
    
    resultado = (suma + (suma * 0.21)).toFixed(2);
    mensaje = "El precio final, más IVA, es: " + resultado
    
    alert(mensaje);
};
//ALUMNO: FERRARIS EZEQUIEL - CLASE H