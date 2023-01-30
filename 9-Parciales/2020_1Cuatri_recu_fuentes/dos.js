
function mostrar() {

  let descuento = 0;
  let cantidadDeBolsas = 0;
  let cantidadBolsasCal = 0;
  let cantidadBolsasArena = 0;
  let cantidadBolsasCemento = 0;
  let importeBruto = 0;
  let importeConDescuento = 0;
  let materialMasCompradoCant = 0;
  let materialMasComprado;
  let tipoPrecioMasAlto;
  let precioMasAlto = 0;

  let i=0;
  let condition= true;
  do {
      let pregunta;
      if(i==0) {
          alert(`Bienvenido! Aquí podrá ingresar los datos de los materiales a comprar`);
          i++;
      }
      else {
          pregunta = prompt("¿Desea seguir cargando datos? (SI/NO)");
          if(pregunta != "Si" && pregunta != "SI" && pregunta != "si") {
              condition= false;
              break;
          }
      }

      let materialValidado = prompt("Por favor, ingrese un material. Puede ser cal, arena o cemento.");
      while(materialValidado != "cal" && materialValidado != "cemento" && materialValidado != "arena") {
        materialValidado = prompt("El dato ingresado es incorrecto. Debe ser cal, arena o cemento");
      };

      let cantidadBolsasValidada = parseInt(prompt("Por favor, ingrese la cantidad de bolsas. Debe ser superior a 0."));
      while(cantidadBolsasValidada <= 0 || isNaN(cantidadBolsasValidada)) {
        cantidadBolsasValidada = parseInt(prompt("El dato ingresado es incorrecto. Debe ser un número superior a 0"));
      };

      let precioValidado = parseFloat(prompt("Por favor, ingrese el precio por bolsa. Debe ser superior a 0."));
      while(precioValidado <= 0 || isNaN(precioValidado)) {
        precioValidado = parseFloat(prompt("El dato ingresado es incorrecto. Debe ser un número superior a 0"));
      };

      if(i==1) {
          tipoPrecioMasAlto = materialValidado;
          precioMasAlto = precioValidado;
          i++;
      }
      else {
          if(precioMasAlto < precioValidado) {
            tipoPrecioMasAlto = materialValidado;
            precioMasAlto = precioValidado;
          }
      };

      switch(materialValidado) {
        case "cal":
          cantidadBolsasCal += cantidadBolsasValidada;
          break;
        case "cemento":
          cantidadBolsasCemento += cantidadBolsasValidada;
          break;
        case "arena":
          cantidadBolsasArena += cantidadBolsasValidada;
          break;
      };

      importeBruto += cantidadBolsasValidada * precioValidado;

  }
  while(condition);

  cantidadDeBolsas = cantidadBolsasArena + cantidadBolsasCal + cantidadBolsasCemento;

  if(cantidadDeBolsas > 30) {
    descuento = 0.25;
  }
  else if(cantidadDeBolsas > 10) {
    descuento = 0.15;
  };

  materialMasCompradoCant = Math.max(cantidadBolsasArena, cantidadBolsasCal, cantidadBolsasCemento);
  if(materialMasCompradoCant == cantidadBolsasArena) {
    materialMasComprado = "arena";
  }
  else if (materialMasCompradoCant == cantidadBolsasCal) {
    materialMasComprado = "cal";
  } 
  else {
    materialMasComprado = "cemento";
  } 
  
  importeConDescuento = (importeBruto - (importeBruto * descuento)).toFixed(2);
  importeBruto = importeBruto.toFixed(2);

  if(descuento > 0) {
    alert(`El importe bruto a pagar es de $${importeBruto}. Se le aplica un descuento del ${descuento*100}%, siendo el total $${importeConDescuento}. El material más comprado fue ${materialMasComprado}, y el más caro por bolsa fue ${tipoPrecioMasAlto} por $${precioMasAlto}`);
  }
  else {
    alert(`El importe total a pagar es de $${importeBruto}. El material más comprado fue ${materialMasComprado}, y el más caro por bolsa fue ${tipoPrecioMasAlto} por $${precioMasAlto}`);
  }

};




