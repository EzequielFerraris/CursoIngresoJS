
function mostrar() 
{

  var materialValidado;
  var cantidadValidada;
  var precioValidado;

  var cantidadTotalBolsas;
  var descuento;
  var importeBruto;
  var importeConDescuento;
  var bolsasArena;
  var bolsasCal;
  var bolsasCemento;
  var tipoMasCaro;
  var precioTipoMasCaro;
  var materialMasComprado;
  var cantidadMaterialMasComprado;
  var mensaje;
  var i;
  var pregunta;

  cantidadTotalBolsas = 0;
  descuento = 0;
  importeBruto = 0;
  bolsasArena = 0;
  bolsasCemento = 0;
  bolsasCal = 0;
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

    materialValidado = prompt("Por favor, ingrese el material comprado. Puede ser cal, arena o cemento.");
    while(materialValidado !="cal" && materialValidado != "arena" && materialValidado != "cemento")
    {
      materialValidado = prompt("El dato ingresado es inválido. Inténtelo Nuevamente. Puede ser cal, arena o cemento.");
    }

    cantidadValidada = prompt("Por favor, ingrese la cantidad de bolsas del material comprado. Debe ser mayor a 0");
    cantidadValidada = parseInt(cantidadValidada);
    while(isNaN(cantidadValidada) || cantidadValidada < 1)
    {
      cantidadValidada = prompt("El dato ingresado es inválido. Inténtelo Nuevamente. Debe ser una cantidad mayor a 0");
      cantidadValidada = parseInt(cantidadValidada);
    }

    precioValidado = prompt("Por favor, ingrese el precio del material comprado. Debe ser mayor a 0");
    precioValidado = parseFloat(precioValidado);
    while(isNaN(precioValidado) || precioValidado < 0.001)
    {
      precioValidado = prompt("El dato ingresado es inválido. Inténtelo Nuevamente. Ingrese un precio mayor a 0");
    }

    switch(materialValidado)
    {
      case "cal":
        bolsasCal += cantidadValidada;
      break;
      case "arena":
        bolsasArena += cantidadValidada;
      break;
      case "cemento":
        bolsasCemento += cantidadValidada;
      break;
    }

    if(i==1)
    {
      tipoMasCaro = materialValidado;
      precioTipoMasCaro = precioValidado;
    }
    else
    {
      if(precioTipoMasCaro < precioValidado)
      {
        tipoMasCaro = materialValidado;
        precioTipoMasCaro = precioValidado;
      }
    }

    importeBruto += precioValidado * cantidadValidada;
    cantidadTotalBolsas += cantidadValidada;

  }

  cantidadMaterialMasComprado = Math.max(bolsasArena, bolsasCal, bolsasCemento);
  if(cantidadMaterialMasComprado == bolsasArena)
  {
    materialMasComprado = "arena";
  }
  else
  {
    if(cantidadMaterialMasComprado == bolsasCal)
    {
      materialMasComprado = "cal";
    }
    else
    {
      materialMasComprado = "cemento";
    }
  }

  mensaje = "El importe bruto a pagar es de $" + importeBruto + ".";

  if(cantidadTotalBolsas > 30)
  {
    descuento = 25;  
  }
  else
  {
    if(cantidadTotalBolsas > 10)
    {
      descuento = 15;
    }
  }

  if(descuento != 0)
  {
    descuento = importeBruto * descuento / 100;
    importeConDescuento = importeBruto - descuento;
    mensaje += "\nPor haber comprado una gran cantidad, corresponde un descuento de $" + descuento + ", siendo el monto final $" + importeConDescuento;
  }

  mensaje += "\nEl material más comprado fue " + materialMasComprado + " del que se compraron " + cantidadMaterialMasComprado + " bolsas." 
  
  alert(mensaje);
}

//Alumno: Ferraris Ezequiel - División H

/*<h2></br>Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
			<br> Tipo validad("arena";"cal";"cemento") 
			<br> Cantidad de bolsas,
	        <br> Precio por bolsa (más de cero ),
	        <br> al terminar la compra el cliente accede a un descuento segun las bolsas en total
	        <br> Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
			<br> Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.	
				<br>a)
				El importe total a pagar , bruto sin descuento y...
				<br>b)
				el importe total a pagar con descuento(solo si corresponde)
				<br>d)
				Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.		
				<br>f)
				El tipo mas caro
        */




