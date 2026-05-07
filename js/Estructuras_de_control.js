//Estructura de control If
/**
 * La estructuta de control If se utiliza para ejecutar un bloque de codigo si se cumple una condicion especifica.
 * 
 * El usuario debe de ingresar un dia y el If debe de responder si es habil (que no sea fin de semana) o no.
 */

let dia = prompt("Ingrese un dia de la semana:").toLowerCase();

if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
    console.log("Es un dia habil.");
} else{
    console.log("No es un dia habil.");
}

//Estructura de control for
/**
 * LA estructura de control for se utiliza para repetir un bloque de codigo un numero especifico de veces.
 * 
 * Imprimir los dias de la seman utilizando un ciclo for y un arreglo.
 */

let diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
// Un arreglo es una estructura de datos que puede almacenar multiples valores en una sola variable.
// Si un arreglo es de tamaño 6, el indice va de 0 a 5

for(let i = 0; i < diasSemana.length; i++){
    console.log(diasSemana[i]);
}