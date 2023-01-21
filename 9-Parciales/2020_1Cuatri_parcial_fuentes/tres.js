
//FUNCIONES VALIDADORAS

function validarNombre() {
	let i = 0;
	let condicion = true;
	do{
		let nombreI;
		//PRIMERA VEZ
		if(i==0) {
			nombreI = prompt("Por favor, ingrese su nombre:");
			i++;
		}
		else {
			nombreI = prompt("El nombre ingresado no es válido. Intentelo nuevamente:");
		};
		//REG EXP PARA VALIDAR QUE SOLO INCLUYA LETRAS

		let checker = new RegExp("\\W|[0-9]|\s", "g");

		console.log(checker.test(nombreI));

		if(checker.test(nombreI)) {
			continue;
		};
		if(nombreI == "") {
			continue;
		};

		nombreI= nombreI.toLowerCase();
		
		condicion = false;
		return nombreI;
	
	
	} while (condicion);



};

function validarEdad() {

	let i = 0;
	let condicion = true;
	do{
		let edadI;
		//PRIMERA VEZ
		if(i==0) {
			edadI = prompt("Por favor, ingrese su edad:");
			i++;
		}
		else {
			edadI = prompt("La edad ingresada no es válida. Intentelo nuevamente:");
		};
		//REG EXP PARA VALIDAR QUE SOLO INCLUYA NUMEROS

		let checker = new RegExp("[^0-9]");

		if(checker.test(edadI)) {
			continue;
		};

		edadI= parseInt(edadI);
		if(edadI < 0 || edadI > 110 || isNaN(edadI)) {
			continue;
		};

		condicion = false;
		return edadI;
	
	
	} while (condicion);


};

function validarSexo() {

	let i = 0;
	let condicion = true;
	do{
		let sexoI;
		//PRIMERA VEZ
		if(i==0) {
			sexoI = prompt("Por favor, ingrese su sexo: (F/M)");
			i++;
		}
		else {
			sexoI = prompt("El dato ingresado no es válido. Intentelo nuevamente:");
		};

		if(sexoI != "F" && sexoI !="M") {
			continue;
		};

		condicion = false;
		return sexoI;
	
	
	} while (condicion);


};

function validarEstadoCivil(){


	let i = 0;
	let condicion = true;
	do{
		let estadoCI;
		//PRIMERA VEZ
		if(i==0) {
			estadoCI = prompt("Por favor, ingrese su estado civil: ('soltero', 'casado, 'viudo')");
			i++;
		}
		else {
			estadoCI = prompt("El dato ingresado no es válido. Intentelo nuevamente:");
		};

		if(estadoCI != "soltero" && estadoCI !="casado"  && estadoCI !="viudo") {
			continue;
		};

		condicion = false;
		return estadoCI;

	
	} while (condicion);


};

function validarTemperatura() {

	let i = 0;
	let condicion = true;
	do{
		let temperaturaI;
		//PRIMERA VEZ
		if(i==0) {
			temperaturaI = prompt("Por favor, ingrese su temperatura actual en centígrados:");
			i++;
		}
		else {
			temperaturaI = prompt("La temperatura ingresada no es válida. Intentelo nuevamente:");
		};
		//REG EXP PARA VALIDAR QUE SOLO INCLUYA NUMEROS

		let checker = new RegExp("[^0-9.]");

		if(checker.test(temperaturaI)) {
			continue;
		}

		temperaturaI= parseFloat(temperaturaI);
		if(temperaturaI < 30 || temperaturaI > 45 || isNaN(temperaturaI)) {
			continue;
		};

		condicion = false;
		return temperaturaI;
	
	} while (condicion);

};


//FUNCIÓN PRINCIPAL

function mostrar(){

let temperaturaMasAlta = 0;
let nombreTempAlta;
let contadorViudosHyM = 0;
let hombresSolteros = 0;
let hombresViudos = 0;
let terceraEdadTempAlta = 0;
let edadAccHS = 0;


let j = 0;
let condicion = true;

do {
	if(j==0) {
		alert("Bienvenido! Por favor, ingrese los datos solicitados.");
		j++;
	}
	else {
		let pregunta = prompt("¿Desea seguir cargando datos? (Si/No)");
		if(pregunta != "Si" && pregunta != "si") {
			condicion = false;
			break;
		};
	};
	
	let nombreValidado = validarNombre();
	let edadValidada = validarEdad();
	let sexoValidado = validarSexo();
	let estadoCivilValidado = validarEstadoCivil();
	let temperaturaValidada = validarTemperatura();

	//DETERMINAR SI LA TEMP INGRESADA ES LA MÁS ALTA Y SI ES ASÍ, GUARDARLA JUNTO AL NOMBRE;
	if(temperaturaValidada > temperaturaMasAlta) {
		temperaturaMasAlta = temperaturaValidada;
		nombreTempAlta = nombreValidado;
	};

	//DETERMINAR VIUDOS: 

	if(estadoCivilValidado == "viudo" && edadValidada >= 18) {
		contadorViudosHyM++;
	}

	//DETERMINAR SI ES HOMBRE VIUDO O SOLTERO

	if(sexoValidado == "M" && estadoCivilValidado == "viudo") {
		hombresViudos++;
	}
	else if (sexoValidado == "M" && estadoCivilValidado == "soltero") {
		hombresSolteros++;
		edadAccHS += edadValidada;
	};

	// PERSONAS MAYORES CON TEMPERATURA ALTA
	if(edadValidada >= 60 && temperaturaValidada >= 38) {
		terceraEdadTempAlta++;
	}

} while(condicion);
	
	//CALCULOS CON LOS DATOS INGRESADOS
	let totalViudosHyM = contadorViudosHyM;
	let totalViudosSolteros = hombresViudos + hombresSolteros;
	let promedioEdadHSolteros;


	//INFORMAR AL USUARIO

	alert(`La persona con la temperatura más alta fue ${nombreTempAlta}, con ${temperaturaMasAlta} grados.`);
	alert(`Se registraron un total de ${totalViudosHyM} personas viudas mayores de edad`);
	alert(`Se registraron un total de ${totalViudosSolteros} hombres viudos o solteros`);
	alert(`La cantidad de personas con 60 o más años y más de 38 grados de temperatura es de ${terceraEdadTempAlta}`);
	if(hombresSolteros > 0) {
		promedioEdadHSolteros = parseInt(edadAccHS / hombresSolteros);
		alert(`El promedio de edad de los hombres solteros fue de ${promedioEdadHSolteros}`);
    }
	else {
		alert(`No se registraron hombres solteros, por lo que no hay un promedio de edad de ese grupo.`);
	};

};
