/* EJERCICIO 7
Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura.
*/
let factura = 0;
let opcion = 0;
let var_control = 0;
let nombre = "";
let cantidad = 0;
let precio = 0;

do {
    opcion  = Number(prompt("Menu Inicio \n\t1. Ingresar nuevo producto. \n\t2. Salir."));
    if(opcion == 1){
        nombre  = prompt("Ingrese el nombre del producto: ");
        precio   = Number(prompt("Ingrese valor del producto: "));
        cantidad = Number(prompt("Ingrese catidad: "));
        
        factura = (precio * cantidad) + factura;
    }
    if (opcion == 2){
        var_control = 1;
    }
    if (opcion != 1 && opcion != 2){
        console.log("Opcion no valida, vuelva a intentarlo...")
    }

}while( var_control != 1);

console.log("El total de su factura es: ", factura);
