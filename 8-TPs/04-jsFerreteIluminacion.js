/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */

 /* SWITCH CON IF ADENTRO
function CalcularPrecio () {

    const PRECIO_BASE = 35;
    var cantidad;
    var marca;
    var descuento;
    var precioUnitario;
    var impuesto;
    var importeTotal;
    var mensaje;

    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidad = parseInt(cantidad);
    
        switch(cantidad) 
        {  
            case 1:
            case 2:
                descuento = 0;
                break;
            case 3:
                if(marca == "ArgentinaLuz") 
                {
                    descuento = 0.15;
                }
                else if(marca == "FelipeLamparas")
                {
                    descuento = 0.1;
                }
                else {
                    descuento = 0.05;
                }
                break;
            case 4:
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
                {
                    descuento = 0.25;
                } 
                else{
                    descuento = 0.2;
                };
                break;      
            case 5:
                if(marca == "ArgentinaLuz") 
                {
                    descuento = 0.4;
                }
                else {
                    descuento = 0.3;
                };
                break;
            default: 
                descuento = 0.5;
                break;     
        };

        precioUnitario = PRECIO_BASE - (PRECIO_BASE * descuento);
        importeTotal = precioUnitario * cantidad;

    if(importeTotal > 120) 
    {
        impuesto = importeTotal * 0.1;
        importeTotal += impuesto;
        mensaje = "Usted pago $" + impuesto + " de IIBB.\nEl importe total a pagar es de $" + importeTotal;
    }
    else 
    {
        mensaje = "El importe total a pagar es de $" + importeTotal;
    };

    document.getElementById("txtIdprecioDescuento").value = precioUnitario;
    alert(mensaje);
}; */

// ALUMNO: FERRARIS EZEQUIEL MANUEL - DIVISIÓN H
 
/* IF CON SWITCH ADENTRO
function CalcularPrecio () 
{

    const PRECIO_BASE = 35;
    var cantidad;
    var marca;
    var descuento;
    var precioUnitario;
    var impuesto;
    var importeTotal;
    var mensaje;

    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidad = parseInt(cantidad);
    
        if(cantidad >= 1 && cantidad <=2) 
        {
            descuento = 0;
        }
        else if(cantidad == 3) 
        {
            switch(marca) 
            {
                case "ArgentinaLuz":
                    descuento = 0.15;
                    break;
                case "FelipeLamparas":
                    descuento = 0.1;
                    break;
                default:
                    descuento = 0.05;
                    break;
            }
        }
        else if(cantidad == 4) 
        {
            switch(marca) 
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 0.25;
                    break;
                default:
                    descuento = 0.2;
                    break;
            }
        }
        else if(cantidad == 5) 
        {
            switch(marca) 
            {
                case "ArgentinaLuz":
                    descuento = 0.4;
                    break;
                default:
                    descuento = 0.3;
                    break;
            }
        }
        else 
        {
            descuento = 0.5;
        }; 

        precioUnitario = PRECIO_BASE - (PRECIO_BASE * descuento);
        importeTotal = precioUnitario * cantidad;

    if(importeTotal > 120) 
    {
        impuesto = importeTotal * 0.1;
        importeTotal += impuesto;
        mensaje = "Usted pago $" + impuesto + " de IIBB.\nEl importe total a pagar es de $" + importeTotal;
    }
    else 
    {
        mensaje = "El importe total a pagar es de $" + importeTotal;
    };

    document.getElementById("txtIdprecioDescuento").value = precioUnitario;
    alert(mensaje);
};

// ALUMNO: FERRARIS EZEQUIEL MANUEL - DIVISIÓN H

*/

//SWITCH CON SWITCH ADENTRO
/*
function CalcularPrecio () 
{

    const PRECIO_BASE = 35;
    var cantidad;
    var marca;
    var descuento;
    var precioUnitario;
    var impuesto;
    var importeTotal;
    var mensaje;

    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    cantidad = parseInt(cantidad);
    
        switch(cantidad) 
        {  
            case 1:
            case 2:
                descuento = 0;
                break;
            case 3:
                switch(marca) 
                {
                    case "ArgentinaLuz":
                        descuento = 0.15;
                        break;
                    case "FelipeLamparas":
                        descuento = 0.1;
                        break;
                    default:
                        descuento = 0.05;
                        break;
                }
            case 4:
                switch(marca) 
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 0.25;
                        break;
                    default:
                        descuento = 0.2;
                        break;
                }
            case 5:
                switch(marca) 
                {
                    case "ArgentinaLuz":
                        descuento = 0.4;
                        break;
                    default:
                        descuento = 0.3;
                        break;
                }
            default: 
                descuento = 0.5;
                break;
        };

        precioUnitario = PRECIO_BASE - (PRECIO_BASE * descuento);
        importeTotal = precioUnitario * cantidad;

    if(importeTotal > 120) 
    {
        impuesto = importeTotal * 0.1;
        importeTotal += impuesto;
        mensaje = "Usted pago $" + impuesto + " de IIBB.\nEl importe total a pagar es de $" + importeTotal;
    }
    else 
    {
        mensaje = "El importe total a pagar es de $" + importeTotal;
    };

    document.getElementById("txtIdprecioDescuento").value = precioUnitario;
    alert(mensaje);
}; 

*/

// ALUMNO: FERRARIS EZEQUIEL MANUEL - DIVISIÓN H

/*
//SOLO IFS

function CalcularPrecio () 
{

    //DECLARO VARIABLES
    var precioBase;
    var marca;
    var cantidad;
    var descuento;
    var importeBruto;
    var importeConDescuento;
    var importeFinal;
    var impuesto;
    var mensaje;

    //ASIGNO VALORES
    precioBase = 35;
    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    impuesto = 0;
    descuento = 0;

    //TRANSFORMO EL INPUT DE CANTIDAD A TYPE == "NUMBER"
    cantidad = parseInt(cantidad);

    //OPCIONAL: SI EL USUARIO INGRESÓ UN NÚMERO NEGATIVO, MUESTRO 0 EN EL ÁREA E INFORMO POR ALERT QUE EL VALOR ERA INVÁLIDO
    if(cantidad < 1 || isNaN(cantidad)) 
    { 
        document.getElementById("txtIdprecioDescuento").value = 0;
        mensaje = "El valor ingresado es inválido. Ingrese un número entero mayor o igual a 1."; 
        alert(mensaje);
    }
    else 
    {
    //EVALÚO EL DESCUENTO A APLICAR EN BASE A LA CANTIDAD INGRESADA
        if(cantidad == 3)
        {
            if (marca == "ArgentinaLuz") 
            {
                descuento = 15;
            }
            else 
            {
                if (marca == "FelipeLamparas") 
                {
                    descuento = 10;
                }
                else 
                {
                    descuento = 5;
                }
            }
        }
        else 
        {
            if (cantidad == 4) 
            {
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
                {
                    descuento = 25;
                }
                else
                { 
                    descuento = 20;
                }
            }
            else 
            {
                if (cantidad == 5) 
                {
                    if(marca == "ArgentinaLuz") 
                    {
                        descuento = 40;
                    }
                    else 
                    {
                        descuento = 30;
                    }
                }
                else 
                {
                    descuento = 50;
                }
            }
        }


        //CALCULO EL IMPORTE BRUTO Y LE REALIZO EL DESCUENTO CORRESPONDIENTE
        importeBruto = cantidad * precioBase;
        descuento = importeBruto * descuento / 100;
        importeConDescuento = importeBruto - descuento;

        // CHEQUEO SI EL IMPORTE ES MAYOR A 120, SI ES ASÍ, APLICO UN IMPUESTO DEL 10% E INFORMO POR ALERT. 
        if(importeConDescuento > 120) 
        {
            impuesto = 10;
            impuesto = importeConDescuento * impuesto / 100;
            importeFinal = importeBruto + impuesto;
            mensaje = "Usted pago $" + impuesto + " de IIBB";
            alert(mensaje);
        }
        else 
        {
            importeFinal = importeConDescuento;
        };
        
        //MUESTRO EL RESULTADO FINAL UTILIZANDO EL ID DEL ELEMENTO "TEXT".
        document.getElementById("txtIdprecioDescuento").value = importeFinal;
    
    };
};

//ALUMNO: FERRARIS EZEQUIEL - DIVISIÓN H
*/

//CENTRAL MARCAS
/*
function CalcularPrecio () 
{
    //DECLARO VARIABLES
    var precioBase;
    var marca;
    var cantidad;
    var descuento;
    var importeBruto;
    var importeConDescuento;
    var importeFinal;
    var impuesto;
    var mensaje;

    //ASIGNO VALORES
    precioBase = 35;
    cantidad = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    descuento = 0;
    impuesto = 0;

    //TRANSFORMO EL INPUT DE CANTIDAD A TYPE == "NUMBER"
    cantidad = parseInt(cantidad);

    //OPCIONAL: SI EL USUARIO INGRESÓ UN NÚMERO NEGATIVO, MUESTRO 0 EN EL ÁREA E INFORMO POR ALERT QUE EL VALOR ERA INVÁLIDO
    if(cantidad < 1 || isNaN(cantidad)) 
    { 
        document.getElementById("txtIdprecioDescuento").value = 0;
        mensaje = "El número ingresado es inválido. Ingrese un número mayor o igual a 1"; 
        alert(mensaje);
    }
    else 
    { //EVALÚO POR MARCAS Y LUEGO POR CANTIDAD
        if(marca == "ArgentinaLuz") 
        {
            if(cantidad == 3) 
            {
                descuento = 15;
            }
            else 
            {
                if(cantidad == 4) 
                {
                    descuento = 25;
                }
                else 
                {
                    if(cantidad == 5)
                    {
                        descuento = 40;
                    }
                    else 
                    {
                        descuento = 50;
                    }
                }
            }
        }
        else {
            if(marca == "FelipeLamparas") 
            {
                if(cantidad == 3) 
                {
                    descuento = 10;
                }
                else 
                {
                    if(cantidad == 4) 
                    {
                        descuento = 25;
                    }
                    else {
                        if(cantidad == 5)
                        {
                            descuento = 30;
                        }
                        else 
                        {
                            descuento = 50;
                            
                        }
                    }
                }
            }
            else 
            {
                if(cantidad == 3) 
                {
                    descuento = 5;
                }
                else 
                {
                    if(cantidad == 4) 
                    {
                        descuento = 20;
                    }
                    else {
                        if(cantidad == 5)
                        {
                            descuento = 30;
                        }
                        else 
                        {
                            descuento = 50;
                        }
                    }
                }
            }
        };

        //CALCULO EL IMPORTE BRUTO Y LE REALIZO EL DESCUENTO CORRESPONDIENTE
        importeBruto = cantidad * precioBase;
        descuento = importeBruto * descuento / 100;
        importeConDescuento = importeBruto - descuento;

        // CHEQUEO SI EL IMPORTE ES MAYOR A 120, SI ES ASÍ, APLICO UN IMPUESTO DEL 10% E INFORMO POR ALERT. 
        if(importeConDescuento > 120) 
        {
            impuesto = 10;
            impuesto = importeConDescuento * impuesto / 100;
            importeFinal = importeBruto + impuesto;
            mensaje = "Usted pago $" + impuesto + " de IIBB";
            alert(mensaje);
        }
        else 
        {
            importeFinal = importeConDescuento;
        };
        
        //MUESTRO EL RESULTADO FINAL UTILIZANDO EL ID DEL ELEMENTO "TEXT".
        document.getElementById("txtIdprecioDescuento").value = importeFinal;
    };
};

//ALUMNO: FERRARIS EZEQUIEL - DIVISIÓN H
*/

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */