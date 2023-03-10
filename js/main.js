/* EJERCICIO 3
Construir el algoritmo para determinar el voltaje de un
circuito a partir de la resistencia y la intensidad de corriente.
*/
alert(`Calcular el Voltaje de un circuito`)
let R = parseFloat(prompt(`Ingrese el valor de la resistencia en ohmios`));
let I = parseFloat(prompt(`Ingrese el valor de la Intensidad en Amperios`));

console.log(`El Votaje tiene un valor de ${R*I} voltios`)