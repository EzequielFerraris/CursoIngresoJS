/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */

function CalcularPrecio () 
{
    let cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    let marca = document.getElementById("Marca").value;
    let precioBase = 35;
    let resultado;
    let impuesto;

        switch(cantidad) {        
            case 5:
                if(marca == "ArgentinaLuz") {
                    resultado = (precioBase - precioBase * 0.4) * cantidad;
                }
                else {resultado = (precioBase - precioBase * 0.3) * cantidad;
                };
                break;
            case 4:
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                    resultado = (precioBase - precioBase * 0.25) * cantidad;
                } 
                else{
                    resultado = (precioBase - precioBase * 0.2) * cantidad;
                };
                break;
            case 3:
                if(marca == "ArgentinaLuz") {
                    resultado = (precioBase - precioBase * 0.15) * cantidad;
                }
                else if(marca == "FelipeLamparas"){
                    resultado = (precioBase - precioBase * 0.1) * cantidad;
                }
                else {
                    resultado = (precioBase - precioBase * 0.05) * cantidad;
                }
                break;
            case 2:
            case 1:
                resultado = precioBase * cantidad;
                break;
            default: 
                resultado = (precioBase - precioBase * 0.5) * cantidad;
                break;     
        };

    if(resultado > 120) {
        impuesto = resultado * 0.1;
        resultado += impuesto;
        document.getElementById("txtIdprecioDescuento").value = resultado;

        alert(`Usted pago $${impuesto} de IIBB.`);
    }
    else {
        document.getElementById("txtIdprecioDescuento").value = resultado;
    };

}
