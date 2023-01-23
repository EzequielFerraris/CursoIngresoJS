function validarNumero(num) {
    let i = 0;
    condition = true;
    do {
        let datoI;
        if(i==0) {
            datoI = prompt(`Por favor, ingrese un número para ${num}`);
            i++;
        }
        else {
            datoI = prompt(`El dato ingresado es invalido. Por favor, intentelo nuevamente.`)
        };

        let checker = /[^0-9]/;

        if(checker.test(datoI)) {
            continue;
        }

        datoI= parseInt(datoI);

        if(datoI == 0 || isNaN(datoI)) {
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
            datoI = prompt(`Por favor, ingrese un valor para ${str}. Puede abonarse con  "mercadoPago", "débito", "crédito", "transferencia" o "efectivo"`);
            i++;
        }
        else {
            datoI = prompt(`El dato ingresado es invalido. Por favor, ingrese solamente "mercadoPago", "débito", "crédito", "transferencia"  o "efectivo".`)
        };

        if(datoI != "mercadoPago" &&  datoI != "débito" &&  datoI != "efectivo" &&  datoI !="crédito" &&  datoI != "transferencia" ) {
            continue;
        }

        condition = false;
        return datoI;
    }
    while(condition)
};


function mostrar(){

    let destino = document.getElementById("continenteDestino").value;
    let cantidadDeDias = validarNumero("la cantidad de días");
    let medioDePago = validarStr("el medio de pago");
    let precioDia = 100;
    let precioBruto = precioDia * cantidadDeDias;
    let resultado;

    switch(destino) {
        case "América":
            switch(medioDePago){
                case "débito":
                    resultado = (precioBruto - (precioBruto * 0.6));
                    break;
                default:
                    resultado = (precioBruto - (precioBruto * 0.5));
                    break;
                
            };
            break;
        case "África":
            switch(medioDePago){
                case "efectivo":
                case "mercadoPago":
                    resultado = (precioBruto - (precioBruto * 0.75));
                    break;
                default:
                    resultado = (precioBruto - (precioBruto * 0.6));
                    break;
            };
            break;
        case "Europa":
            switch(medioDePago){
                case "mercadoPago":
                    resultado = (precioBruto - (precioBruto * 0.3));
                    break;
                case "débito": 
                    resultado = (precioBruto - (precioBruto * 0.35));
                    break;
                default:
                    resultado = (precioBruto - (precioBruto * 0.25));
                    break;
            };
            break;
        case "Asia":
        case "Oceanía":
            resultado = (precioBruto + (precioBruto * 0.2));
            break;
    }
    
    alert(`Viajar ${cantidadDeDias} días a ${destino} cuesta $${resultado}`);



};




