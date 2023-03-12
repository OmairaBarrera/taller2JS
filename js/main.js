/* EJERCICIO 8
Programa que Ingrese por teclado:
    a. el valor del lado de un cuadrado para mostrar por pantalla el
perímetro del mismo
    b. la base y la altura de un rectángulo para mostrar el área del
mismo
*/
let cal_cuadrado = 0;
let lado = 0;
let cal_rectangulo = 0;
let base = 0;
let altura = 0;

opcion  = Number(prompt("Menu Inicio \n\t1. Calcular perimetro cuadrado. \n\t2. Calcular area rectangulo."));
if(opcion == 1){
    lado  = Number(prompt("Ingrese el lado del cuadrado: "));
    cal_cuadrado = 4*lado;
    console.log("El perimetro del cuadrado es: ", cal_cuadrado);
}
if (opcion == 2){
    base  = Number(prompt("Ingrese la base del rectangulo: "));
    altura  = Number(prompt("Ingrese la altura del rectangulo: "));
    cal_rectangulo = base*altura;
    console.log("El area del rectangulo es: ", cal_rectangulo);
}
if (opcion != 1 && opcion != 2){
    console.log("Opcion no valida, vuelva a intentarlo...")
}


