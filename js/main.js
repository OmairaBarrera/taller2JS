/* EJERCICIO 10
Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR.
*/
let numeros = [];
let numero;
let suma = 0;
let v = 0;

do{
    numero = Number(prompt(`Ingrese un numero`));
    
    if(numero>0){
        numeros.push(numero);
        suma = numero + suma;
    }

}while (numero != 0);

console.log(numeros);
console.log(`Sumatoria de los valores: ${suma}`);
console.log(`El promedio es: ${suma/numeros.length}`);
console.log(`Cantidad de numeros digitados: ${numeros.length}`);
console.log(`El valor mayor: ${Math.max(...numeros)}`);
console.log(`El valor menor: ${Math.min(...numeros)}`);