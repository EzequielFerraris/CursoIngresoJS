/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

function verificarPositivo(input) {
    let checker = new RegExp("[^0-9]");
    if(checker.test(input) || parseInt(input) <= 0 || isNaN(parseInt(input))) {
        return "invalid";
    };
};

function numerosPares() {
    let numeroIngresado = document.getElementById("txtIdNumero").value;
    if(verificarPositivo(numeroIngresado) == "invalid") {
        alert("El dato ingresado no es un número entero positivo. Inténtelo nuevamente.");
        return "";
    };
    numeroIngresado = parseInt(numeroIngresado);
    //determino el punto de inicio de la cuenta.
    let comienzo;
    if(numeroIngresado % 2 == 0) {
        comienzo = numeroIngresado;
    }
    else {
        comienzo = numeroIngresado -1;
    }
    let cantidadDePares = comienzo / 2;
    alert(`La cantidad de números pares desde el 0 hasta el número ingresado es de ${cantidadDePares}`);

};

function numerosImpares() {
    let numeroIngresado = document.getElementById("txtIdNumero").value;
    if(verificarPositivo(numeroIngresado) == "invalid") {
        alert("El dato ingresado no es un número entero positivo. Inténtelo nuevamente.");
        return "";
    };
    numeroIngresado = parseInt(numeroIngresado);
    //determino el punto de inicio de la cuenta.
    let comienzo;
    if(numeroIngresado % 2 == 0) {
        comienzo = numeroIngresado;
    }
    else {
        comienzo = numeroIngresado +1;
    }
    let cantidadDeImpares = comienzo / 2;
    alert(`La cantidad de números impares desde el 0 hasta el número ingresado es de ${cantidadDeImpares}`);



};
function numerosDivisibles() {
    let numeroIngresado = document.getElementById("txtIdNumero").value;
    if(verificarPositivo(numeroIngresado) == "invalid") {
        alert("El dato ingresado no es un número entero positivo. Inténtelo nuevamente.");
        return "";
    };
    numeroIngresado = parseInt(numeroIngresado);
    numeroDeDivisores = 0;
    if(numeroIngresado > 100) {
        alert("No hay números divisibles entre 1 y 100 por el número ingresado.");
        return "";
    }
    else {
        if(numeroIngresado > 50) {
            numeroDeDivisores++;
            alert(`Hay ${numeroDeDivisores} números divisibles por el número ingresado entre 1 y 100.`);
            return "";
        }
        else if(numeroIngresado <=50) {
            for(let i = 100; i > 0; i--) {
                if(i % numeroIngresado == 0) {
                    numeroDeDivisores++;
                };
                if(i==numeroIngresado) {
                    break;
                };
            };
        };
    alert(`Hay ${numeroDeDivisores} números divisibles por el número ingresado entre 1 y 100.`);
    };

};
function verificarPrimo() {
    let numeroIngresado = document.getElementById("txtIdNumero").value;
    if(verificarPositivo(numeroIngresado) == "invalid") {
        alert("El dato ingresado no es un número entero positivo. Inténtelo nuevamente.");
        return "";
    };
    

};
function numerosPrimos() {
    let numeroIngresado = document.getElementById("txtIdNumero").value;
    if(verificarPositivo(numeroIngresado) == "invalid") {
        alert("El dato ingresado no es un número entero positivo. Inténtelo nuevamente.");
        return "";
    };

    numeroIngresado = parseInt(numeroIngresado);

    if(numeroIngresado==1) {
        alert("El número no es primo");
        return "";
    }
    else if(numeroIngresado == 2) {
        alert("El número es primo");
        return "";
    }
    else {
        if(numeroIngresado % 2 == 0) {
            alert("El número no es primo");
            return "";
        }
        else {
            let counter = 0;
            for(let i = numeroIngresado; i > 2; i-=2) {
                if(numeroIngresado % i == 0) {
                    counter++;
                    if(counter >2) {
                        break;
                    };
                };
            };
            if(counter > 2) {
                alert("El número no es primo");
                return "";
            }
            else {
                alert("El número es primo");
                return "";
            }
        };
    };
};