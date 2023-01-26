function validarNum(num, min, max) {
let i = 0;
let condition = true;
do{
	let datoI;
	if(i==0) {
		datoI= prompt(`Por favor, ingrese un valor para ${num}. El mismo debe encontrarse entre ${min} y ${max}.`);
		i++;
	}
	else {
	datoI= prompt(`El dato ingresado no es válido. Inténtelo nuevamente.  El mismo debe encontrarse entre ${min} y ${max}.`)	
	};

	let checker = /[^0-9.]/g

	if(checker.test(datoI)) {
		continue;
	}

	datoI = parseFloat(datoI);

	if(datoI < min || datoI > max || isNaN(datoI)) {
		continue;
	};

	condition = false;
	return datoI;
	
}
while(condition);	
};


function validarStr(str, rango="") {
	let i = 0;
	let condition = true;

do{
	let datoI;
	if(i==0) {
		datoI= prompt(`Por favor, ingrese un valor para ${str}. Solo debe contener letras ${rango}`);
		i++;
	}
	else {
	datoI= prompt(`El dato ingresado no es válido. Inténtelo nuevamente. Solo debe contener letras ${rango}`)
	};

	let checker = /[^a-zA-Záéíóú]/g

	if(checker.test(datoI)) {
		continue;
	}

	switch(str) {
		case "el sexo":
			if(datoI != "F" && datoI != "M") {
				continue;
			};
			break;
		case "la nacionalidad":
			
			switch(datoI) {
				case "A":
					datoI = "argentina";
					break;
				case "E":
					datoI = "extranjera";
					break;
				case "N":
					datoI = "nacionalizada";
					break;
				default:
					continue;
			};
			break;
		case "el estado civil":
			if(datoI != "casado" && datoI != "soltero" && datoI != "viudo") {
				continue;
			};
			break;
		case "el nombre":
			if(datoI.length <=1 || typeof datoI != "string") {
				continue;
			}
			break;
	};

	condition = false;
	return datoI;
}
while(condition);
};


function mostrar(){

	let tempMasAlta = "No se registraron temperaturas";
	let nacTempMasAlta = "No se ingresó ningún caso";

	let cantMayoresSolteros = 0;
	let cantMujeresSolterasOViudas = 0;
	let mayoresConTempAlta = 0;
	let mujeresCasadas = 0;
	let edadMujeresCasadasAcc = 0;
	let promedioEdadMujeresCasadas = "No se registraron mujeres casadas."

	let i = 0;
	let condition = true;
	do{
		let pregunta;
		if(i==0) {
			alert(`Bienvenidx! Aquí podrá cargar los datos de los pasajeros registrados para el vuelo.`);
			i++;
		}
		else {
			pregunta = prompt(`¿Desea seguir registrando pasajeros? (SI/NO)`);
			if(pregunta != "SI" && pregunta != "si" && pregunta != "Si") {
				condition = false;
				break;
			};
		};

		let nombreValidado = validarStr("el nombre");
		let nacionalidadValidada = validarStr("la nacionalidad", "('A' = Argentino/ 'E' = 'Extranjero/ 'N' = 'Nacionalizado'")
		let edadValidada = validarNum("la edad", 0, 120);
		let sexoValidado = validarStr("el sexo", "(M/F)");
		let estadoCivilValidado = validarStr("el estado civil", "(casado/ soltero/ viudo)");
		let tempValidada = validarNum("la temperatura", 30, 50);

		if(i==1) {
			tempMasAlta = tempValidada;
			nacTempMasAlta = nacionalidadValidada;
			i++;
		}
		else if(tempMasAlta < tempValidada){
			tempMasAlta = tempValidada;
			nacTempMasAlta = nacionalidadValidada;
		};

		if(edadValidada >= 18 && estadoCivilValidado == "soltero") {
			cantMayoresSolteros++;
		};

		if(sexoValidado == "F") {
			if(estadoCivilValidado == "soltero" || estadoCivilValidado == "viudo") {
				cantMujeresSolterasOViudas++;
			}
			else {
				mujeresCasadas++;
				edadMujeresCasadasAcc += edadValidada;
			};
		}

		if(edadValidada > 60  && tempValidada > 38) {
			mayoresConTempAlta++;
		};

}
while(condition);

if(mujeresCasadas > 0) {
	promedioEdadMujeresCasadas = (edadMujeresCasadasAcc / mujeresCasadas).toFixed(2);
};

alert(`La nacionalidad de la persona con la mayor temperatura registrada es ${nacTempMasAlta}.
Hay ${cantMayoresSolteros} mayores de edad solteros, ${cantMujeresSolterasOViudas} mujer/es soltera/s o viuda/s.
Las personas mayores a 60 años con más de 38º de temperatura sumaron: ${mayoresConTempAlta}.
El promedio de edad entre las mujeres casadas fue de: ${promedioEdadMujeresCasadas}`);

};

