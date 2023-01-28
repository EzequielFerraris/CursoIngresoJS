
function validarDato(nombre, min="not", max="not") {

    let i=0;
    let condition =  true;

    do {
        let datoI;
        let mensajeAd;
        let tipoDato;

        switch(nombre) {
            case "el nombre":
                mensajeAd = `Solo debe contener letras.`;
                tipoDato = "string";
                break;
            case "la nacionalidad":
                mensajeAd = `Ingrese "A" para "argentino", "E" para "extranjero" o "N" para "nacionalizado"`;
                tipoDato = "string";
                break;
            case "la edad":
                mensajeAd = `Edades válidas entre 0 y 120.`;
                tipoDato = "number";
                break;
            case "el sexo":
                mensajeAd = `(M / F)`;
                tipoDato = "string";
                break;
            case "el estado civil":
                mensajeAd = `Valores posibles: "casado", "soltero", "viudo"`;
                tipoDato = "string";
                break;
            case "la temperatura":
                mensajeAd = `Valores entre 30º y 50º.`;
                tipoDato = "number";
                break;
        };

        if(i==0) {
            datoI = prompt(`Por favor, ingrese un dato para ${nombre}. ${mensajeAd}`);
            i++;
        }
        else {
            datoI = prompt(`El dato ingresado es inválido. Intentelo nuevamente. ${mensajeAd}`);
        };

        let checker;

        //Si es un string
        if(tipoDato == "string") {
            
            checker = /[^a-zA-Záéíóú]/gi;

            if(checker.test(datoI) || typeof datoI != "string") {
                continue;
            };

            switch(nombre) {
                case "el nombre":
                    if(datoI.length <= 1) {
                        continue;
                    };
                    break;
                case "la nacionalidad":
                    if(datoI !="A" && datoI !="E" && datoI !="N") {
                        continue;
                    } else {
                        switch(datoI) {
                            case "A":
                                datoI = "Argentino";
                                break;
                            case "E": 
                                datoI = "Extranjero";
                                break;
                            case "N":
                                datoI = "Nacionalizado";
                                break;
                        }
                    };
                    break;
                case "el sexo":
                    if(datoI !="F" && datoI !="M") {
                        continue;
                    };
                    break;
                case "el estado civil":
                    if(datoI !="soltero" && datoI !="casado" && datoI !="viudo") {
                        continue;
                    };
                    break;
            };

        }
        else {
            checker = /[^0-9.]/g;

            if(checker.test(datoI)) {
                continue;
            };

            datoI = parseFloat(datoI);
        
            if(typeof min == "number" || isNaN(datoI)) {
                if(datoI < min) {
                    continue;
                }
            };

            if(typeof max == "number") {
                if(datoI > max) {
                    continue;
                }
            };
        };

        condition = false;
        return datoI;
    }
    while(condition);

};

function mostrar() {

    let tempMasAlta = 0;
    let nacionalidadTempMasAlta;
    let cantMayoresSolteros = 0;
    let mujeresSolterasViudas = 0;
    let mayoresConTemp = 0;
    let cantMujeresCasadas = 0;
    let edadMujeresCasadasAcc = 0;
    let promedioEdadCasadas = "No se registraron mujeres casadas"


    let i=0;
    let condition= true;
    do {
        let pregunta;
        if(i==0) {
            alert(`Bienvenido! Aquí podrá ingresar los datos de los pasajeros`);
            i++;
        }
        else {
            pregunta = prompt("¿Desea seguir cargando datos? (SI/NO)");
            if(pregunta != "Si" && pregunta != "SI" && pregunta != "si") {
                condition= false;
                break;
            }
        }

        let nombreValidado = validarDato("el nombre");
        let nacionalidadValidada = validarDato("la nacionalidad");
        let edadValidada = validarDato("la edad", 0, 120);
        let sexoValidado = validarDato("el sexo");
        let estadoCivilValidado = validarDato("el estado civil");
        let tempValidada = validarDato("la temperatura", 30, 50);

        if(i==1) {
            tempMasAlta = tempValidada;
            nacionalidadTempMasAlta = nacionalidadValidada;
            i++;
        }
        else {
            if(tempMasAlta < tempValidada) {
                tempMasAlta = tempValidada;
                nacionalidadTempMasAlta = nacionalidadValidada;
            }
        };

        if(edadValidada >= 18 && estadoCivilValidado == "soltero") {
            cantMayoresSolteros++;
        };

        if (sexoValidado == "F") {
            if (estadoCivilValidado == "soltero" || estadoCivilValidado == "viudo") {
                mujeresSolterasViudas++;
            }
            else {
                cantMujeresCasadas++;
                edadMujeresCasadasAcc += edadValidada;
            };
        };

        if(edadValidada > 60 && tempValidada > 38) {
            mayoresConTemp++;
        };

    }
    while(condition);

    if(cantMujeresCasadas > 0) {
        promedioEdadCasadas = (edadMujeresCasadasAcc / cantMujeresCasadas).toFixed(2);
    };


    alert(`La nacionalidad de la persona con mayor temperatura fue ${nacionalidadTempMasAlta}.
La cantidad de mayores de edad solteros fue de ${cantMayoresSolteros}.
La cantidad de mujeres solteras o viudas fue de: ${mujeresSolterasViudas}.
La cantidad de personas mayores a 60 años con más de 38º fue de ${mayoresConTemp}.
El promedio de edad de las mujeres casadas fue de: ${promedioEdadCasadas}`);

};

