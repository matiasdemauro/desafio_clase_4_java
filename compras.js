//Este algoritmo determina el monto final con el descuento en base a el monto a pagar por la compra de cierta cantidad de unidades del producto.
//Lo pensé debido a un proyecto sobre ventas de productos online en el cual estoy trabajando.

//Definimos las funciones compra y descuento: la primera realiza la suma total sin aplicarle el descuento, la segunda aplica el descuento y muestra el valor final a pagar.

function compra (precio,cantidad){
    return precio * cantidad;
}
function descuento(subtotal,desc){
    return subtotal * desc;
}
//Lectura de datos:
alert("Bienvenidos a Gianne Home&Deco ¡ Gracias por elegirnos ! Seleccione su producto :");
precio = parseInt(prompt("Ingrese precio del producto"));
cantidad = parseInt(prompt("Ingrese cantidad"));
if (    (precio != "" && cantidad !="") && ( ( precio = parseInt(precio) ) && ( cantidad = parseInt(cantidad) ) )   ){
    let desc = 0.3;
    let subtotal = compra (precio,cantidad);
    let total = subtotal - descuento(subtotal,desc);
    alert("Precio base: " + "$" + subtotal);
    alert("Precio total con descuento del 30%: " + "$" + total);
    alert("Gracias por su compra.")
}
else {
    alert("Error, se debe ingresar numeros enteros distinto de cero. Intente nuevamente acutalizando la página.");
}









//fin