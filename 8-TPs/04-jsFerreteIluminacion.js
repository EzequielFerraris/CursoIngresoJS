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
    const PRECIO_BASE = 35;
    let descuento;
    let precioUnitario;
    let impuesto;
    let importeTotal;
        switch(cantidad) {  
            case 1:
            case 2:
                descuento = 0;
                break;
            case 3:
                if(marca == "ArgentinaLuz") {
                    descuento = 0.15;
                }
                else if(marca == "FelipeLamparas"){
                    descuento = 0.1;
                }
                else {
                    descuento = 0.05;
                }
                break;
            case 4:
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                    descuento = 0.25;
                } 
                else{
                    descuento = 0.2;
                };
                break;      
            case 5:
                if(marca == "ArgentinaLuz") {
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

    if(importeTotal > 120) {
        impuesto = importeTotal * 0.1;
        importeTotal += impuesto;
        alert(`Usted pago $${impuesto} de IIBB.`);
        alert(`El importe total a pagar es de $${importeTotal}`);
        document.getElementById("txtIdprecioDescuento").value = precioUnitario;
    }
    else {
        document.getElementById("txtIdprecioDescuento").value = precioUnitario;
        alert(`El importe total a pagar es de $${importeTotal}`);
    };

}
