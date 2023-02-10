/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () {
    var tempFarenheit;
    var tempCelcius;
    var mensaje;

    tempFarenheit = document.getElementById("txtIdTemperatura").value;
    tempFarenheit = parseFloat(tempFarenheit);

    tempCelcius = (tempFarenheit - 32) * 5/9;
    tempCelcius = tempCelcius.toFixed(2);
    
    mensaje = "Los " + tempFarenheit + " grados Farenheit son " + tempCelcius + " grados Celcius";

    alert(mensaje);

};

function CentigradosFahrenheit () {

    var tempFarenheit;
    var tempCelcius;
    var mensaje;

    tempCelcius = document.getElementById("txtIdTemperatura").value;
    tempCelcius = parseFloat(tempCelcius);

    tempFarenheit = (tempCelcius * 9/5) + 32;
    tempFarenheit = tempFarenheit.toFixed(2);

    mensaje = "Los " + tempCelcius + " grados Celcius, son " + tempFarenheit + " grados Farenheit.";

    alert(mensaje);
};

//ALUMNO: FERRARIS EZEQUIEL - COMISIÓN H