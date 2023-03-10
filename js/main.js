/* EJERCICIO 1
Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado"
*/

let notas = [];
let promedio;

for (let i = 1; i < 4; i++){
    notas.push(parseFloat(prompt(`Ingrese la Nota ${i}`)));
}

console.log(notas);
promedio = (notas[0]+notas[1]+notas[2])/3;
console.log(`${promedio.toFixed(2)}`);

if (promedio<=3.9){
    console.log(`El alumno debe ESTUDIAR MAS`)
}else{
    console.log(`El alumno se gano la BECA`)
}