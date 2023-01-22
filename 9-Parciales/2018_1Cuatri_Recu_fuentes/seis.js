

function mostrar()
{
    let horaI = document.getElementById("laHora").value;
    horaI = parseInt(horaI);
    let condition;

    switch(horaI) {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            condition = "Es de mañana";
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            condition = "Es de tarde";
            break;
        case 20:
        case 21:
        case 22:
        case 23:
        case 24: 
            condition = "Es de noche, a dormir";
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            condition = "Es de noche";
            break;
        default: 
            condition = "El dato ingresado no es una hora válida";
            break;
           
    };

    alert(`${condition}`);





}
