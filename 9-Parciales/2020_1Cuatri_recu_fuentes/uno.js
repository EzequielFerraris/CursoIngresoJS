function mostrar() 
{
  var productoValidado;
  var precioValidado;
  var cantidadValidada;
  var marcaValidada;
  var fabricanteValidado;

  var precioJabonMasCaro;
  var cantidadJabonMasCaro;
  var fabricanteJabonMasCaro;
  
  var cantidadJabon;
  var cantidadAlcohol;
  var cantidadBarbijos;
  var comprasJabon;
  var comprasAlcohol;
  var comprasBarbijos;
  var cantidadProductoMasComprado;
  var productoMasComprado;
  var promedioProductoMasComprado;

  var mensaje;
  var pregunta;

  cantidadAlcohol = 0;
  cantidadJabon = 0;
  cantidadBarbijos = 0;
  comprasAlcohol = 0;
  comprasBarbijos = 0;
  comprasJabon = 0;
  promedioProductoMasComprado = 0;

  for(let i= 0; i < 5; i++)
  {
    productoValidado = prompt("Por favor, ingrese el producto a comprar. Puede ser jabón, alcohol o barbijo");
    while(productoValidado != "jabón" && productoValidado != "alcohol" && productoValidado != "barbijo")
    {
      productoValidado = prompt("El dato ingresado es inválido. Inténtelo nuevamente. Puede ser jabón, alcohol o barbijo");
    }

    precioValidado = prompt("Por favor, ingrese el precio del producto a comprar. Debe ser mayor a 0");
    precioValidado = parseFloat(precioValidado);
    while(isNaN(precioValidado) || precioValidado < 0.001)
    {
      precioValidado = prompt("El dato ingresado es inválido. Inténtelo nuevamente. Debe ser mayor a 0");
      precioValidado = parseFloat(precioValidado);
    }

    cantidadValidada = prompt("Por favor, ingrese la cantidad del producto a comprar. Debe ser mayor a 0");
    cantidadValidada = parseInt(cantidadValidada);
    while(isNaN(cantidadValidada) || cantidadValidada < 1)
    {
      cantidadValidada = prompt("El dato ingresado es inválido. Inténtelo nuevamente. Debe ser mayor a 0");
      cantidadValidada = parseInt(cantidadValidada);
    }

    marcaValidada = prompt("Por favor, ingrese la marca del producto a comprar");
    while(typeof(marcaValidada) != "string")
    {
      marcaValidada = prompt("El dato ingresado es inválido. Inténtelo nuevamente. Por favor, ingrese una marca válida");
    }

    fabricanteValidado = prompt("Por favor, ingrese el nombre del productor.");
    while(typeof(fabricanteValidado) != "string")
    {
      fabricanteValidado = prompt("El dato ingresado es inválido. Inténtelo nuevamente. Ingrese un nombre válido.");
    }

    switch(productoValidado)
    {
      case "jabón":
        if(comprasJabon == 0)
        {
          precioJabonMasCaro = precioValidado;
          cantidadJabonMasCaro = cantidadValidada;
          fabricanteJabonMasCaro = fabricanteValidado;
        }
        else
        {
          if(precioJabonMasCaro < precioValidado)
          {
            precioJabonMasCaro = precioValidado;
            cantidadJabonMasCaro = cantidadValidada;
            fabricanteJabonMasCaro = fabricanteValidado;
          }
        }
        cantidadJabon += cantidadValidada;
        comprasJabon++;
      break;
      case "alcohol":
        cantidadAlcohol += cantidadValidada;
        comprasAlcohol++;
      break;
      case "barbijo":
        cantidadBarbijos += cantidadValidada;
        comprasBarbijos++;
      break;
    }
  }

  cantidadProductoMasComprado = Math.max(cantidadAlcohol, cantidadBarbijos, cantidadJabon);
  if(cantidadProductoMasComprado == cantidadAlcohol)
  {
    productoMasComprado = "alcohol";
  }
  else
  {
    if(cantidadProductoMasComprado ==  cantidadBarbijos)
    {
      productoMasComprado = "barbijo";
    }
    else
    {
      productoMasComprado = "jabón";
    }
  }

  promedioProductoMasComprado = cantidadProductoMasComprado / 5;
  promedioProductoMasComprado = promedioProductoMasComprado.toFixed(2);

  if(comprasJabon > 0)
  {
    mensaje = "El jabón más caro salió $" + precioJabonMasCaro + " y se compraron " + cantidadJabonMasCaro + ". Su fabricante fue " + fabricanteJabonMasCaro + ".";
  }
  else
  {
    mensaje = "No se compró jabón esta vez."
  }

  mensaje += "\nEl producto más comprado fue " + productoMasComprado + " y en promedio se compraron " + promedioProductoMasComprado + " unidades por compra."
  mensaje += "\nLa cantidad de barbijos comprados es de " + cantidadBarbijos + ".";
  alert(mensaje);


};

//Alumno: Ferraris Ezequiel - División H


/*  

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio, <br>
			de cada una debo obtener los siguientes datos: <br>
			el tipo de producto (validar "barbijo" , "jabón" o "alcohol") , <br>
			el precio (validar entre 100 y 300),<br>
			la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
			 la Marca y el fabricante. <br>
			Se debe Informar al usuario lo siguiente:<br>

			a) Del más caro de los jabones, la cantidad de unidades y el fabricante<br>
			b) Del tipo de producto con más unidades en total de la compra, el promedio por compra <br>
			c) Cuántas unidades de Barbijos se compraron en total <br><br>
      */