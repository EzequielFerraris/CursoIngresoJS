function validarNumero(num) {
    let i = 0;
    condition = true;
    do {
        let datoI;
        if(i==0) {
            datoI = prompt(`Por favor, ingrese un valor para el dato ${num}`);
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

        if(datoI <= 0 || isNaN(datoI)) {
            continue;
        }
        condition = false;
        return datoI;

    }
    while(condition)
};

function mostrar(){

    alert("Bienvenido! Aquí podrá calcular el perímetro de un triángulo equilatero ingresando el valor de uno de sus lados");

    let ladoValidado = validarNumero("lado");
    let resultado = (ladoValidado * 3).toFixed(2);

    alert(`El perímetro del triángulo equilátero de lado ${ladoValidado} es de ${resultado}`);

}
