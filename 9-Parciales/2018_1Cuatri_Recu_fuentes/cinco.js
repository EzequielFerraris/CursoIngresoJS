function mostrar()
{

    let diaDeLaSemana = prompt("Por favor, ingrese un día de la semana:");
    diaDeLaSemana = diaDeLaSemana.toLowerCase();
    let condition;
    switch(diaDeLaSemana) {
        case "lunes":
        case "martes":
        case "miércoles":
        case "jueves":
        case "viernes":
            condition = "A trabajar!"
            break;
        case "sábado":
        case "domingo":
            condition = "Buen fin de semana!"
            break;
        default: 
            condition = "El dato ingresado no es un día de la semana";
            break;
           
    };
    alert(`${condition}`);
}
