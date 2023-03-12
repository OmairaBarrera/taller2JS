/* EJERCICIO 6
Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres. 
*/
let datos = [];
let opcion = 0;
let var_control = 0;
let nombre = "";
let sexo = "";
let nota = 0;
let nota_mayor = 0;
let nota_menor = 100;
let cont_m = 0;
let cont_f = 0;

//Inicio del flujo
console.log("¡Bienvenido al sistema de registro de notas¡")

do {
    opcion  = Number(prompt("Menu Inicio \n\t1. Ingresar nuevo estudiante. \n\t2. Salir."));
    if(opcion == 1){

        nombre  = prompt("Ingrese el nombre del estudiante: ");
        sexo    = prompt("Ingrese el sexo del estudiante (M: masculino -- F: femenino): ");
        nota    = Number(prompt("Ingrese la nota (0% - 100%): "));

        if(nota > nota_mayor){
            nota_mayor      = nota;
            nombre_mayor    = nombre;
        }
        if(nota < nota_menor ){
            nota_menor      = nota;
            nombre_menor    = nombre
        }
        if(sexo == "F"){
            cont_f++;
        }
        if(sexo == "M"){
            cont_m++;
        }
    }
    if (opcion == 2){
        var_control = 1;
    }
    if (opcion != 1 && opcion != 2){
        console.log("")
        console.log("Opcion no valida, vuelva a intentarlo...")
        console.log("");
    }

}while( var_control != 1);

console.log("");
console.log("Estudiante con mayor nota: ", nombre_mayor, "con un porcentaje: ", nota_mayor);
console.log("Estudiante con menor nota: ", nombre_menor, "con un porcentaje: ", nota_menor);
console.log("Numero de hombres:", cont_m);
console.log("Numero de mujeres: ", cont_f);