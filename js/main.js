/* EJERCICIO 5
Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
diferencia, en caso contrario, informar el producto y la
división del primero respecto al segundo.   
*/
let num_one     = 0;
let num_two     = 0;
let suma        = 0;
let diferencia  = 0;

num_one = Number(prompt("Ingrese el primer numero: "));
num_two = Number(prompt("Ingrese el segundo numero: "));

if(num_one>num_two){
    suma        = num_one + num_two;
    diferencia  = num_one - num_two;
    console.log("El resultado de la suma es: ",suma );
    console.log("El resultado de la resta es: ", diferencia);
}else{
    producto = num_one * num_two;
    division = num_one / num_two;
    console.log("El resultado del producto es: ",producto );
    console.log("El resultado de la división es: ", division);
}