/* EJERCICIO 9
N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros.
*/
let finalistas = 0;
let datos = [];
let ganador = 0;
let ganadorNombre = " ";

finalistas = Number(prompt("Bienvenidos a las finales en salto triple \n Ingrese el numero de finalistas"))

for (let i=0; i < finalistas; i++){
    let nombre = prompt(`Ingresa el nombre del finalista ${i+1}: `);
    let marca = Number(prompt(`Ingresa la marca del finalista ${i+1}: `));
    datos.push({
        Nombre: nombre,
        Marca: marca,
    })

    if (marca > ganador){
        ganador = marca;
        ganadorNombre = nombre;
    }
}

console.table(datos);
console.log(`El ganador de la medalla de oro es: ${ganadorNombre}, con una marca: ${ganador}`)
if (ganador > 15.50){
    console.log("El ganador rampio el record, se realizara el pago de 500 millones")
} else {
    console.log("El ganador no rompio el record.")
}
