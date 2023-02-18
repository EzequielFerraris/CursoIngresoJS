/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio, <br>
			de cada una debo obtener los siguientes datos: <br>
			el tipo (validar "barbijo" , "jabón" o "alcohol") , <br>
			el precio (validar entre 100 y 300),<br>
			la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
			 la Marca y el fabricante. <br>
			Se debe Informar al usuario lo siguiente:<br>

			a) Del más barato de los alcohol, la cantidad de unidades y el fabricante<br>
			b) Del tipo con mas unidades, el promedio por compra <br>
			c) Cuántas unidades de jabones hay en total 
*/

function mostrar () 
{
  var tipoValidado;
  var precioValidado;
  var cantidadValidada;
  var marcaValidada;
  var fabricanteValidado;

  var alcoholMasBaratoPrecio;
  var alcoholMasBaratoCantidad;
  var alcoholMasBaratoFabricante;
  var cantidadAlcohol;
  var cantidadBarbijos;
  var cantidadJabon;
  var comprasAlcohol;
  var comprasBarbijos;
  var comprasJabon;
  var tipoMasComprado;
  var cantidadMasComprada;
  var promedioMasComprado;
  var comprasProductoMasComprado;
  
  var mensaje;
  var mensajeLoop;

  alcoholMasBaratoPrecio = "No se ha comprado alcohol";
  cantidadAlcohol = 0;
  cantidadBarbijos = 0;
  cantidadJabon = 0;
  comprasAlcohol = 0;
  comprasBarbijos = 0;
  comprasJabon = 0;


  for(let i = 0; i< 5; i++)
  {
    mensajeLoop = "A continuación podrá ingresar el producto número " + (i + 1);
    alert(mensajeLoop);

    tipoValidado = prompt("Por favor, ingrese el producto a comprar. Puede ser barbijo, alcohol o jabón");
    tipoValidado = tipoValidado.toLowerCase();
    while(tipoValidado != "jabón" && tipoValidado != "alcohol" && tipoValidado != "barbijo")
    {
      tipoValidado = prompt("El dato ingresado es inválido. Igréselo nuevamente. Puede ser barbijo, alcohol o jabón");
      tipoValidado = tipoValidado.toLowerCase();
    }

    precioValidado = prompt("Por favor, ingrese el precio del producto a comprar. Debe ser mayor a 0.");
    precioValidado = parseFloat(precioValidado);
    while(isNaN(precioValidado) || precioValidado <= 0)
    {
      precioValidado = prompt("El dato ingresado es inválido. Igréselo nuevamente. Debe ser mayor a 0");
      precioValidado = parseFloat(precioValidado);
    }

    cantidadValidada = prompt("Por favor, ingrese la cantidad a comprar. Debe ser mayor a 0");
    cantidadValidada = parseInt(cantidadValidada);
    while(isNaN(cantidadValidada) || cantidadValidada < 1)
    {
      cantidadValidada = prompt("El dato ingresado es inválido. Igréselo nuevamente. Debe ser mayor a 0");
      cantidadValidada = parseInt(cantidadValidada);
    }

    marcaValidada = prompt("Por favor, ingrese la marca del producto a comprar");
    while(typeof(marcaValidada) != "string" || marcaValidada.length < 1)
    {
      marcaValidada = prompt("El dato ingresado es inválido. Por favor, ingrese la marca del producto a comprar");
    }

    fabricanteValidado = prompt("Por favor, ingrese el producto a comprar. Puede ser barbijo, alcohol o jabón");
    while(typeof(fabricanteValidado) != "string" || fabricanteValidado.length < 1)
    {
      fabricanteValidado = prompt("El dato ingresado es inválido. Igréselo nuevamente. Debe ser un fabricante válido");
    }
  
    switch(tipoValidado)
    {
      case "jabón":
        comprasJabon++;
        cantidadJabon+= cantidadValidada;

      break;
      case "alcohol":
        comprasAlcohol++;
        cantidadAlcohol += cantidadValidada;
        if(cantidadAlcohol == 0)
        {
          alcoholMasBaratoPrecio = precioValidado;
          alcoholMasBaratoCantidad = cantidadValidada;
          alcoholMasBaratoFabricante = fabricanteValidado;
        }
        else
        {
          if(alcoholMasBaratoPrecio > precioValidado)
          {
            alcoholMasBaratoPrecio = precioValidado;
            alcoholMasBaratoCantidad = cantidadValidada;
            alcoholMasBaratoFabricante = fabricanteValidado;
          }
        }

      break;
      case "barbijo":
        comprasBarbijos++;
        cantidadBarbijos+= cantidadValidada;

      break;
    }

  }

  cantidadMasComprada = Math.max(cantidadAlcohol, cantidadBarbijos, cantidadJabon);
  if(cantidadMasComprada == cantidadAlcohol)
  {
    tipoMasComprado = "alcohol";
    comprasProductoMasComprado = comprasAlcohol;
  }
  else
  {
    if(cantidadMasComprada == cantidadBarbijos)
    {
      tipoMasComprado = "barbijo";
      comprasProductoMasComprado = comprasBarbijos;
    }
    else
    {
      tipoMasComprado = "jabón";
      comprasProductoMasComprado = comprasJabon;
    }
  }

  promedioMasComprado = cantidadMasComprada / comprasProductoMasComprado;
  promedioMasComprado = promedioMasComprado.toFixed(2);

  mensaje = "El producto más comprado fue " + tipoMasComprado + " y en promedio se compraron " + promedioMasComprado + " unidades por compra."
  if(cantidadAlcohol > 0)
  {
    mensaje += "\nEl alcohol más barato comprado costó $" + alcoholMasBaratoPrecio + " se compraron " + alcoholMasBaratoCantidad + " unidades y fue fabricado por " + alcoholMasBaratoFabricante;
  }
  else
  {
    mensaje += "\nNo se ha comprado alcohol.";
  }
  mensaje += "\nLa cantidad de jabón comprada es de " + cantidadJabon;
  
  alert(mensaje);

};
//Alumno: Ferraris Ezequiel - División H