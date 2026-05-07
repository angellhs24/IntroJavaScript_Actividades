// 1. Número entero
console.log(42, typeof 42); 

// 2. String (Cadena de texto)
console.log('Veinticinco', typeof 'Veinticinco'); 

// 3. Número negativo
console.log(-666, typeof -666); 

// 4. Booleano (Verdadero)
console.log(true, typeof true); 

// 5. El número cero
console.log(0, typeof 0); 

// 6. String vacío
console.log('', typeof ''); 

// 7. Null
console.log(null, typeof null); 

// 8. Undefined
console.log(undefined, typeof undefined); 

// 9. FALSE (Nota: Si está en mayúsculas, lo busca como variable. 
// Para que sea booleano debe ser 'false')
try {
    console.log(FALSE, typeof FALSE);
} catch (e) {
    console.log("FALSE en mayúsculas da error porque no está definido.");
}

// 10. Mis propios ejemplos y experimentos:

// Un número decimal (Float)
console.log(3.14, typeof 3.14); // Sigue siendo 'number'

// Un Array (Lista)
console.log([1, 2, 3], typeof [1, 2, 3]); // Devuelve 'object'
