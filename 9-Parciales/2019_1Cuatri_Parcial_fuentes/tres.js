function validarNumero(num, min) {
    let i = 0;
    condition = true;
    do {
        let datoI;
        if(i==0) {
            datoI = prompt(`Por favor, ingrese un valor para ${num}`);
            i++;
        }
        else {
            datoI = prompt(`El dato ingresado es invalido. Por favor, intentelo nuevamente.`)
        };

        let checker = /[^0-9.]/;

        if(checker.test(datoI)) {
            continue;
        }

        datoI= parseFloat(datoI);

        if(datoI < min || isNaN(datoI)) {
            continue;
        }
        condition = false;
        return datoI;
    }
    while(condition);
};


function mostrar(){

    alert("Aquí podrá calcular el precio de un producto una vez aplicado un descuento.")
    let precioValidado = validarNumero("el precio", 0.001);
    let descuentoValidado = validarNumero("el descuento (en porcentaje)", 0);

    let resultado = (precioValidado - (precioValidado * descuentoValidado / 100)).toFixed(2);
    if(resultado < 0) {
        resultado = 0;
    };

    document.getElementById("elPrecioFinal").value = resultado;

};
