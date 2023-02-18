/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
			<br> Tipo validad("arena";"cal";"cemento") 
			<br> Cantidad de bolsas,
	        <br> Precio por bolsa (más de cero ),
	        <br> 
	        <br> Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
			<br> Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.	
				<br>a)
				El importe total a pagar , bruto sin descuento y...
				<br>b)
				el importe total a pagar con descuento(solo si corresponde)
				<br>d)
				Informar el tipo con mas cantidad de bolsas.		
				<br>f)
				El tipo mas caro
*/


function mostrar()
{

    var tipoValidado;
    var cantidadValidada;
    var precioValidado;
    var cantidadBolsasComprada;
    
    var cantidadBolsasCal;
    var cantidadBolsasCemento;
    var cantidadBolsasArena;
    var descuento;
    var importeBruto;
    var importeConDescuento;
    var precioProductoMasCaro;
    var tipoMasCaro;
    var cantidadMasComprada;
    var tipoMasComprado;
    var mensaje;
    var pregunta;
    var i;

    cantidadBolsasArena = 0;
    cantidadBolsasCal = 0;
    cantidadBolsasCemento = 0;
    importeBruto = 0;
    descuento = 0;
    i=0;

    while(true)
    {
        if(i != 0)
        {
            pregunta = confirm("¿Desea seguir ingresando datos?");
            if(!pregunta)
            {
                break;
            }
        }
        else
        {
            i++;
        }

        tipoValidado = prompt("Por favor, ingrese el producto comprado. Debe ser cal, arena o cemento");
        while(tipoValidado != "cal" && tipoValidado != "cemento" && tipoValidado !="arena")
        {
            tipoValidado = prompt("El dato ingresado es inválido. Inténtelo nuevamente. Debe ser cal, arena o cemento");
        }

        cantidadValidada  = prompt("Por favor, ingrese la cantidad de producto comprado. Debe ser un entero mayor a 0");
        cantidadValidada = parseInt(cantidadValidada);
        while(isNaN(cantidadValidada) || cantidadValidada < 1)
        {
            cantidadValidada  = prompt("El dato ingresado es inválido. Inténtelo nuevamente. Debe ser un entero mayor a 0");
            cantidadValidada = parseInt(cantidadValidada);
        }


        precioValidado  = prompt("Por favor, ingrese el precio del producto. Debe ser mayor a 0");
        precioValidado = parseFloat(precioValidado);
        while(isNaN(precioValidado) || precioValidado < 0.001)
        {
            precioValidado  = prompt("Por favor, ingrese el precio del producto. Debe ser mayor a 0");
            precioValidado = parseFloat(precioValidado);
        }

        switch(tipoValidado)
        {
            case "cemento":
                cantidadBolsasCemento += cantidadValidada; 
            break;
            case "arena":
                cantidadBolsasArena += cantidadValidada;
            break;
            case "cal":
                cantidadBolsasCal += cantidadValidada;
            break;
        }

        if(i == 1)
        {
            precioProductoMasCaro = precioValidado;
            tipoMasCaro = tipoValidado;
        }
        else 
        {
            if(precioProductoMasCaro < precioValidado)
            {
                precioProductoMasCaro = precioValidado;
                tipoMasCaro = tipoValidado;
            }
        }

        cantidadBolsasComprada += cantidadValidada;
        importeBruto += (cantidadValidada * precioValidado);

    }

    cantidadMasComprada = Math.max(cantidadBolsasArena, cantidadBolsasCal, cantidadBolsasCemento);
    if(cantidadMasComprada == cantidadBolsasArena)
    {
        tipoMasComprado = "arena";
    }
    else 
    {
        if(cantidadMasComprada == cantidadBolsasCal)
        {
            tipoMasComprado = "cal";
        }
        else
        {
            tipoMasComprado = "cemento";
        }
    }

    mensaje = "El total bruto a pagar es de " + importeBruto;

    if(cantidadBolsasComprada > 30) {
        descuento = 25;
        descuento = importeBruto * descuento / 100;
        importeConDescuento = importeBruto - descuento;
        mensaje += "\nAl haber comprado más de 30 bolsas, corresponde un descuento de $" + descuento + " siendo el importe final $" + importeConDescuento;

    }
    else 
    {
        if(cantidadBolsasComprada > 10)
        {
            descuento = 15;
            descuento = importeBruto * descuento / 100;
            importeConDescuento = importeBruto - descuento;
            mensaje += "\nAl haber comprado más de 30 bolsas, corresponde un descuento de $" + descuento + " siendo el importe final $" + importeConDescuento;
        }
    }

    mensaje += "\nEl producto más caro comprado fue " + tipoMasCaro + ".";
    mensaje += "\nEl producto más comprado fue " + tipoMasComprado + ".";
    alert(mensaje);
}