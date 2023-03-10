/* EJERCICIO 2
Dado un número indicar si es par o impar y si es mayor de 10.
*/

let numero = parseFloat(prompt(`Ingrese el numero a calcular si es par o impar`));
let cal= numero%2;

if (cal==0){
    console.log(`El numero`, numero ,`es PAR`)
}else{
    console.log(`El numero`, numero ,`es IMPAR`)
}