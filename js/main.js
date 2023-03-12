/* EJERCICIO 4
Construir el algoritmo que solicite el nombre y edad de 3
personas y determine el nombre de la persona con mayor edad.
*/
let cont = 0;
let edadMayor = 0;
let nombreMayor = 0;

while (cont < 3){
    let nombre = prompt(`Ingresa el Nombre de la persona`);
    let edad = Number(prompt(`Ingresa la Edad de la persona`));
    if(edad > edadMayor){
        edadMayor = edad;
        nombreMayor = nombre;
    }
    cont = cont + 1;
}

console.log(`La persona con mayor Edad es ${nombreMayor}`);