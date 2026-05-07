// Arreglos
// Un arreglo es una estructura de datos que puede contener múltiples valores.

const alumnis = ["Diego", "Israel", "Kelly", "Atzin"];

console.log(alumnis[0]); // Imprime "Diego"

//funciones con arreglos
console.log("Alumnos iniciales:");
console.log(alumnis);

alumnis.push("Juan"); // Agrega "Juan" al final del arreglo
console.log("Alumnos con Juan agregado:");
console.log(alumnis);

// eliminar un elemento del arreglo
alumnis.splice(1, 3); // Elimina el elemento en el índice 1
console.log("Alumnos con elemento eliminado:");
console.log(alumnis);

// eliminar el ultimo elemento del arreglo
alumnis.pop();
console.log("Alumnos con ultimo elemento eliminado:");
console.log(alumnis);

const numeros = [1, 2, 3, 4, 5];

// forEach()
// El método forEach() ejecuta una función proporcionada una vez por cada elemento del arreglo.
// El forEach recorre cada elemento del arreglo y ejecuta la función para cada uno de ellos.

console.log("Números iniciales:");
console.log(numeros);

numeros.forEach((numero) => {
    console.log(numero);
});

// map()
// El método map() crea un nuevo arreglo con los resultados de la función aplicada a cada elemento del arreglo original.
// El map recorre cada elemento pero genera un nuevo arreglo con resultados que ejecute una funcion para cada elemento del arreglo original.

const numerosCuadrados = numeros.map((numero) => {
    return numero * numero;
});

console.log("Números cuadrados:");
console.log(numerosCuadrados);

// Objetos
// Un objeto es una colección de propiedades, donde cada propiedad es una asociación entre un nombre (clave) y un valor.
// un objeto es pasar de algo real a una representacion en codigo que tenga caracteristicas (atributos) y comportamientos (metodos)

const laptop = {
    marca: "Dell", //atributo o propiedad (marca es la clave y "Dell" es el valor)
    modelo: "XPS 13",
    año: 2021,
};

console.log(laptop);
console.log("Marca de la laptop: " + laptop.marca);
console.log("Modelo de la laptop: " + laptop.modelo);
console.log("Año de la laptop: " + laptop.año);

// agregar un nuevo atributo al objeto
laptop.color = "Negro";
console.log(laptop);

// eliminar un atributo del objeto
delete laptop.año;
console.log(laptop);

// modificar un atributo del objeto
laptop.modelo = "XPS 15";
console.log(laptop);

// Funciones

// normal o declarativa
function sumar(a,b) {
    return a + b;
  }
console.log('Funcion normal o declarativa',sumar(1,2)); 

// funcion expresiva 
const sumaExpresiva = function sumar(a,b) {
    return a + b;
  }

console.log('Funcion expresiva',sumaExpresiva(1,2)); 

// funcion felecha 
const sumaFlecha = (a, b) => a + b;


console.log('Funcion flecha',sumaFlecha(1,2)); 

// Funcion anonima
(function(a,b) {
    console.log('Funcion anonima',a + b)
})(1,2)