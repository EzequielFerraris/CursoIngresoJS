

function validarDato(str1) {
    let i=0;
    let condition = true;
    do {
        let datoI;
        if(i==0) {
            datoI = prompt(`Por favor, ingrese un valor para el ${str1}`);
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

    let precio = validarDato("precio");
    let descuento = validarDato("descuento (en porcentaje)");
    let preciofinal = (precio - (precio * (descuento/100))).toFixed(2);
    alert(`El precio final, con descuento incluído es de ${preciofinal}`)

}
