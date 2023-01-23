
function validarNumero(num, min, max) {
    let i = 0;
    condition = true;
    do {
        let datoI;
        if(i==0) {
            datoI = prompt(`Por favor, ingrese un valor para ${num} de la persona`);
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

        if(datoI < min || datoI > max ||isNaN(datoI)) {
            continue;
        }
        condition = false;
        return datoI;
    }
    while(condition);
};

function validarStr(str) {
    let i = 0;
    condition = true;
    do {
        let datoI;
        if(i==0) {
            datoI = prompt(`Por favor, ingrese un valor para ${str} de la persona (F/M)`);
            i++;
        }
        else {
            datoI = prompt(`El dato ingresado es invalido. Por favor, ingrese solamente letras.`)
        };

        let checker = /[\W0-9_]/g;

        if(checker.test(datoI)) {
            continue;
        }

        if(datoI != "F" && datoI != "M" && datoI != "f" && datoI != "m") {
            continue;
        }
        condition = false;
        return datoI;
    }
    while(condition)
};


function mostrar(){

    let sumaAlturas = 0;
    let promedioAltura;
    let alturaMasBaja;
    let sexoAlturaMasBaja;
    let cantidadMujeresAltas = 0;


    for(let i=0; i < 5; i++) {

        let alturaValidada = validarNumero("la altura (en cm)", 0, 250);
        let sexoValidado = validarStr("el sexo (F/M)");

        sumaAlturas += alturaValidada;
        if(i==0){
            alturaMasBaja = alturaValidada;
            sexoAlturaMasBaja = sexoValidado;
        } 
        else {
            if(alturaMasBaja > alturaValidada) {
                alturaMasBaja = alturaValidada;
                sexoAlturaMasBaja = sexoValidado;
            };
        };

        if(sexoValidado=="F" && alturaValidada > 190) {
            cantidadMujeresAltas++;
        };
    };
    
    promedioAltura = sumaAlturas / 5;

    alert(`El promedio de altura entre los jugadores es de ${promedioAltura}cm, la pesona más baja mide ${alturaMasBaja} y es de sexo ${sexoAlturaMasBaja}. La cantidad de mujeres que superan 190 cm es de ${cantidadMujeresAltas}`);
    
};

