
function validarDato(str1) {
    let i=0;
    let condition = true;
    do {
        let datoI;
        if(i==0) {
            datoI = prompt(`Por favor, ingrese un valor para la ${str1} del rectángulo`);
            i++;
        }
        else {
            datoI = prompt("El dato ingresado es incorrecto. Inténtelo nuevamente:");
        };

        let checker = /[^0-9.]/g

        if (checker.test(datoI)) {
            continue;
        };

        datoI = parseFloat(datoI);
        if(datoI <= 0 || isNaN(datoI)) {
            continue;
        };
        return datoI;
        condition = false;
    }
    while(condition);
    
}

function mostrar()
{
    //PIDO LOS DATOS AL USUARIO
    let alturaValidada = validarDato("altura");
    let baseValidada = validarDato("base");

    let perimetro = baseValidada * 2 + alturaValidada * 2;
    alert(`El perímetro del rectángulo es ${perimetro}`);

}
