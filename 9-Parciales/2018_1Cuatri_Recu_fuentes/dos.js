

function mostrar(){

    let nombreI = document.getElementById("elNombre").value;
    let localidadI = document.getElementById("laLocalidad").value;;
    let checker = /[\W_0-9]/g;
    if(checker.test(nombreI)) {
        alert("Por favor, reingrese el nombre. El dato ingresado no es válido;");
        return "";
    }
    else if (checker.test(localidadI)) {
        alert("Por favor, reingrese la localidad. El dato ingresado no es válido;");
        return "";
    }
    else {
        alert(`Usted es ${nombreI} y vive en la localidad ${localidadI}`);
    }
   

};
