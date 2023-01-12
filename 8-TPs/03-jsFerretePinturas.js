/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let tempFarenheit = parseFloat(document.getElementById("txtIdTemperatura").value);
    let tempCelcius = ((tempFarenheit - 32) * 5/9).toFixed(2);
    
    alert(`${tempFarenheit} grados Farenheit son ${tempCelcius} grados Celcius`);

};

function CentigradosFahrenheit () 
{
    let tempCelcius = parseFloat(document.getElementById("txtIdTemperatura").value);  
    let tempFarenheit = ((tempCelcius * 9/5) + 32).toFixed(2);
    
    alert(`${tempCelcius} grados Celcius son ${tempFarenheit} grados Farenheit`);
};
