/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	let edadValid;
	let sexoValid;
	let estadoCivilVal;
	let sueldoValid;
	let legajoValid;
	let nacionalidadValid;

	//VALIDACIÓN EDAD
	let faltaEdad = true;
	let a = 0;
	do {
		let edadI;
		if(a == 0){
			edadI = prompt("Ingrese la edad: ");
			a++;
		}
		else {
			edadI =prompt("El dato ingresado es incorrecto. Intentelo nuevamente:")
		};
		edadI = parseInt(edadI);
		if(typeof edadI != "number" || edadI > 110 || edadI < 0 || isNaN(edadI)) {
			continue;
		};
		edadValid = edadI;
		document.getElementById("txtIdEdad").value = edadValid;
		faltaEdad = false;
	}
	while(faltaEdad);

	//VALIDACIÓN SEXO
	let faltaS = true;
	let b = 0;
	do {
		let sexoI;
		if(b == 0){
			sexoI = prompt("Ingrese el sexo: ");
			b++;
		}
		else {
			sexoI =prompt("El dato ingresado es incorrecto. Intentelo nuevamente:")
		};

		if(sexoI != "M" && sexoI != "F") {
			continue;
		};
		sexoValid = sexoI;
		document.getElementById("txtIdSexo").value = sexoValid;
		faltaS = false;
	}
	while(faltaS);

	//VALIDACIÓN ESTADO CIVIL

	let faltaEC = true;
	let c = 0;
	do {
		let estadoCI;
		if(c == 0){
			estadoCI = prompt("Ingrese el estado civil: ");
			c++;
		}
		else {
			estadoCI = prompt("El dato ingresado es incorrecto. Intentelo nuevamente:")
		};
		if(estadoCI !== "1" && estadoCI !== "2" && estadoCI !== "3" && estadoCI !== "4") {
			continue;
		};
		estadoCI = parseInt(estadoCI);
		switch(estadoCI) {
			case 1:
				estadoCivilVal = "Soltero";
				break;
			case 2:
				estadoCivilVal = "Casado";
				break;
			case 3:
				estadoCivilVal = "Divorciado";
				break;
			case 4:
				estadoCivilVal = "Viudo";
				break;
		}; 
		document.getElementById("txtIdEstadoCivil").value = estadoCivilVal;
		faltaEC = false;
	}
	while(faltaEC);

//VALIDACIÓN SUELDO

let faltaSueldo = true;
let d = 0;
do {
	let sueldoI;
	if(d == 0){
		sueldoI = prompt("Ingrese el sueldo. Debe ser mayor a $8000:");
		d++;
	}
	else {
		sueldoI =prompt("El dato ingresado es incorrecto. Intentelo nuevamente:")
	};
	sueldoI = parseInt(sueldoI);
	if(typeof sueldoI != "number" || sueldoI < 8000 || isNaN(sueldoI)) {
		continue;
	};
	sueldoValid = `$${sueldoI}`;
	document.getElementById("txtIdSueldo").value = sueldoValid;
	faltaSueldo = false;
}
while(faltaSueldo);

//NÚMERO DE LEGAJO

let faltaLeg = true;
let e = 0;
do {
	let legI;
	if(e == 0){
		legI = prompt("Ingrese el número de legajo sin los ceros iniciales: ");
		e++;
	}
	else {
		legI =prompt("El dato ingresado es incorrecto. Intentelo nuevamente:")
	};
	let exp = new RegExp("^[0]|[^0-9]");
	if(exp.test(legI) || legI.length != 4) {
		continue;
	};
	legajoValid = legI;
	document.getElementById("txtIdLegajo").value = legajoValid;
	faltaLeg = false;
}
while(faltaLeg);

//NACIONALIDAD

let faltaNac = true;
	let f = 0;
	do {
		let nacI;
		if(f == 0){
			nacI = prompt("Ingrese la nacionalidad (A, E, N):");
			f++;
		}
		else {
			nacI = prompt("El dato ingresado es incorrecto. Intentelo nuevamente:")
		};
		if(nacI !== "A" && nacI !== "E" && nacI !== "N") {
			continue;
		};
		switch(nacI) {
			case "A":
				nacionalidadValid = "Argentino";
				break;
			case "E":
				nacionalidadValid = "Extranjero";
				break;
			case "N":
				nacionalidadValid = "Nacionalizado";
				break;
		}; 
		document.getElementById("txtIdNacionalidad").value = nacionalidadValid;
		faltaNac = false;
	}
	while(faltaNac);

};
