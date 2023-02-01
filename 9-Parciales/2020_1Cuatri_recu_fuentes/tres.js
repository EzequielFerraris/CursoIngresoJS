
function mostrar() {

    let nacTempMasAlta;
    let temperaturaMasAlta;
    let mayoresSolteros = 0;
    let mujeresSolterasViudas = 0;
    let mayoresTempAlta = 0;
    let cantidadMujeresCasadas = 0;
    let mujeresCasadasEdadAcc = 0;
    let promedioMujeresCasadas = "No se registraron mujeres casadas";

    let condition = true;
    let j = 0;
    do {
        let pregunta;
        if(j==0) {
            alert("Bienvenido. Aquí podrá cargar los datos de los pasajeros.");
            j++;
        }
        else {
            pregunta = prompt("¿Desea seguir ingresando datos? (SI/NO)");
            
            if(pregunta != "SI" && pregunta != "Si" && pregunta != "si") {
                condition = false;
                break;
            };
        };

        let nombreValidado;
        let nacionalidadValidada;
        let edadValidada;
        let sexoValidado;
        let estadoCivilValidado;
        let temperaturaValidada;

        nombreValidado = prompt("Por favor, ingrese el nombre del pasajero. Solo puede utilizar letras");
        
        let checker = /[\W0-9_]/g;

        while(checker.test(nombreValidado) || nombreValidado.length <= 1 ) {
            nombreValidado=prompt("El dato ingresado es inválido. Por favor, intentelo nuevamente. Solo utilice letras");
        };

        nacionalidadValidada = prompt("Por favor, ingrese la nacionalidad del pasajero. Puede ser 'A' para Argentino, 'N' para nacionalizado o 'E' para extranjero.");

        while(nacionalidadValidada != "A" && nacionalidadValidada != "N" && nacionalidadValidada != "E") {
            nacionalidadValidada=prompt("El dato ingresado es inválido. Por favor, intentelo nuevamente. Puede ser 'A' para Argentino, 'N' para nacionalizado o 'E' para extranjero.");
        };

        edadValidada = parseInt(prompt("Por favor, ingrese la edad del pasajero. Solo puede utilizar números enteros mayores o iguales a 0"));
        while(edadValidada < 0 || isNaN(edadValidada)) {
            edadValidada=parseInt(prompt("El dato ingresado es inválido. Por favor, intentelo nuevamente. Solo utilice números"));
        };

        sexoValidado = prompt("Por favor, ingrese el sexo del pasajero (F/M)");
        while(sexoValidado != "F" && sexoValidado != "M") {
            sexoValidado=prompt("El dato ingresado es inválido. Por favor, ingrese F o M");
        };

        estadoCivilValidado = prompt("Por favor, ingrese el estado civil del pasajero. Opciones: soltero, viudo, casado");
        while(estadoCivilValidado != "soltero" && estadoCivilValidado != "viudo" && estadoCivilValidado != "viudo") {
            estadoCivilValidado=prompt("El dato ingresado es inválido. Por favor, intente nuevamente. Opciones: soltero, viudo, casado");
        };

        temperaturaValidada = parseInt(prompt("Por favor, ingrese la temperatura del pasajero. Solo puede utilizar números entre 30 y 50"));
        while(temperaturaValidada < 30 || temperaturaValidada > 50 || isNaN(temperaturaValidada)) {
            temperaturaValidada=parseInt(prompt("El dato ingresado es inválido. Por favor, intentelo nuevamente. Solo utilice números entre 30 y 50"));
        };
    
        if(j == 1) {
            nacTempMasAlta = nacionalidadValidada;
            temperaturaMasAlta = temperaturaValidada;
            j++;
        }
        else if (temperaturaMasAlta < temperaturaValidada) {
            nacTempMasAlta = nacionalidadValidada;
            temperaturaMasAlta = temperaturaValidada;
        };

        if(edadValidada >= 18 && estadoCivilValidado == "soltero") {
            mayoresSolteros++;
        };
        
        if(sexoValidado =="F") {
            if(estadoCivilValidado == "soltero" || estadoCivilValidado == "viudo") {
                mujeresSolterasViudas++;
            } 
            else {
            cantidadMujeresCasadas++;
            mujeresCasadasEdadAcc += edadValidada;
            };
        }

        if(edadValidada > 60 && temperaturaValidada > 38) {
            mayoresTempAlta++;
        };
    }    
    while(condition);
    
    switch(nacTempMasAlta) {
        case "A":
            nacTempMasAlta = "argentina";
            break;
        case "E":
            nacTempMasAlta = "extranjera";
            break;
        case "N":
            nacTempMasAlta = "nacionalizada";
            break;
    };

    if(cantidadMujeresCasadas > 0) {
        promedioMujeresCasadas = (mujeresCasadasEdadAcc / cantidadMujeresCasadas).toFixed(2);
    };

    alert(`La nacionalidad de la persona con temperatura más alta es ${nacTempMasAlta}. La cantidad de mayores de edad solteros es de ${mayoresSolteros}. La cantidad de mujeres solteras o viudas es de ${mujeresSolterasViudas}. La cantidad de personas mayores a 60 que registraron temperaturas mayores a 38º fue de ${mayoresTempAlta}. El promedio de edad de las mujeres casadas es de ${promedioMujeresCasadas}`);

};