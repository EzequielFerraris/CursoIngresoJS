
function mostrar() 
{
    var nombreValidado;
    var nacionalidadValidada;
    var edadValidada;
    var sexoValidado;
    var estadoCivilValidado;
    var temperaturaValidada;
    
    var temperaturaMasAlta
    var temperaturaMasAlta;
    var mayoresSolteros;
    var mujeresSolterasViudas;
    var promedioMujeresCasadas;
    var cantidadMujeresCasadas;
    var edadMujeresCasadasAcc;
    var terceraEdadTemperaturaAlta;

    var i;
    var pregunta;
    var mensaje;

    mayoresSolteros = 0;
    mujeresSolterasViudas = 0;
    terceraEdadTemperaturaAlta = 0;
    promedioMujeresCasadas =0;
    cantidadMujeresCasadas =0;
    edadMujeresCasadasAcc =0;
    i = 0;


    while(true)
    {
        if(i != 0)
        {
         pregunta = confirm("¿Desea seguir ingresando materiales?")
        if(!pregunta)
        {
            break;
        }
        }
        else
        {
            i++;
        }

        nombreValidado = prompt("Por favor, ingrese el nombre del pasajero.");
        while(!nombreValidado || typeof(nombreValidado) != "string" || nombreValidado.length < 2)
        {
            nombreValidado = prompt("El dato ingresado es inválido. Inténtelo Nuevamente. Ingrese un nombre válido");
        }
        
        nacionalidadValidada = prompt("Por favor, ingrese la nacionalidad del pasajero.");
        while(!nacionalidadValidada || typeof(nacionalidadValidada) != "string" || nacionalidadValidada.length < 2)
        {
            nacionalidadValidada = prompt("El dato ingresado es inválido. Inténtelo Nuevamente. Ingrese una nacionalidad válida");
        }

        edadValidada = prompt("Por favor, ingrese la edad del pasajero. Debe ser mayor a 0 y menor a 120");
        edadValidada = parseInt(edadValidada);
        while(isNaN(edadValidada) || edadValidada < 1 || edadValidada > 120)
        {
            edadValidada = prompt("El dato ingresado es inválido. Inténtelo Nuevamente. Debe ser mayor a 0 y menor a 120");
            edadValidada = parseInt(edadValidada);
        }

        sexoValidado = prompt("Por favor, ingrese el sexo del pasajero. Puede ser 'f' para femenino o 'm' para masculino");
        while(sexoValidado != "f" && sexoValidado != "m")
        {
            sexoValidado = prompt("El dato ingresado es inválido. Inténtelo Nuevamente. Puede ser 'f' para femenino o 'm' para masculino");
        }

        estadoCivilValidado = prompt("Por favor, ingrese el estado civil del pasajero. Puede ser 'soltero', 'casado' o 'viudo'");
        while(estadoCivilValidado != "soltero" && estadoCivilValidado != "casado" &&  estadoCivilValidado != "viudo")
        {
            estadoCivilValidado = prompt("El dato ingresado es inválido. Inténtelo Nuevamente. Puede ser 'soltero', 'casado' o 'viudo'");
        }

        temperaturaValidada = prompt("Por favor, ingrese la temperatura del pasajero. Debe ser mayor a 30º y menor a 50º");
        temperaturaValidada = parseInt(temperaturaValidada);
        while(isNaN(temperaturaValidada) || temperaturaValidada < 30 || temperaturaValidada > 50)
        {
            temperaturaValidada = prompt("El dato ingresado es inválido. Inténtelo Nuevamente. Debe ser mayor a 30º y menor a 50º");
            temperaturaValidada = parseInt(temperaturaValidada);
        }

        if(i == 1)
        {
            temperaturaMasAlta = temperaturaValidada;
            nacionalidadTemperaturaMasAlta = nacionalidadValidada
        }
        else
        {
            if(temperaturaMasAlta < temperaturaValidada)
            {
                temperaturaMasAlta = temperaturaValidada;
                nacionalidadTemperaturaMasAlta = nacionalidadValidada
            }
        }
        
        if(edadValidada > 17 && estadoCivilValidado == "soltero")
        {
            mayoresSolteros++;
        }

        if(sexoValidado == "f")
        {
            if(estadoCivilValidado == "soltero" || estadoCivilValidado == "viudo")
            {
                mujeresSolterasViudas++;
            }
            else
            {
                cantidadMujeresCasadas++;
                edadMujeresCasadasAcc += edadValidada;
            }
        }

        if(edadValidada > 60 && temperaturaValidada > 38)
        {
            terceraEdadTemperaturaAlta++;
        }


    }

    mensaje = "La persona con mayor temperatura es de nacionalidad " + nacionalidadTemperaturaMasAlta + ".";
    mensaje += "\nLa cantidad de mayores de edad solteros es de " + mayoresSolteros + ".";
    mensaje += "\nLa cantidad de mujeres solteras o viudas es de " + mujeresSolterasViudas + ".";
    mensaje += "\nLa cantidad de personas mayores a 60 años con alta temperatura es de " + terceraEdadTemperaturaAlta + ".";

    if(cantidadMujeresCasadas > 0) {
        promedioMujeresCasadas = edadMujeresCasadasAcc / cantidadMujeresCasadas;
        promedioMujeresCasadas = promedioMujeresCasadas.toFixed(2);
        mensaje += "\nEl promedio de edad de las mujeres casadas es de: " + promedioMujeresCasadas + ".";
    }
    else
    {
        mensaje += "\nNo se registraron mujeres casadas";
    }
    
    alert(mensaje);
}

//Alumno: Ferraris Ezequiel - División H

/*
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
				 </br>a)
				la Nacionalidad de la persona con mas temperatura.
				 </br>b)
				Cuantos mayores de edad( más  de 17) estan solteros
				 </br>c)
				La cantidad de Mujeres que hay solteras  o viudas.
				 </br>d)
				cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura

				 </br>e)
				El promedio de edad entre las mujeres casadas.

*/