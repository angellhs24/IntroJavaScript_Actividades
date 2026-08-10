// 1. Declaramos el array global para almacenar los libros
let librosLeidos = [];

// 2. Definimos la función para agregar libros
function agregarLibro(titulo) {
    if (titulo && typeof titulo === 'string') {
        librosLeidos.push(titulo);
        console.log(`Libro añadido: "${titulo}"`);
    } else {
        console.log("Por favor, ingresa un título de libro válido.");
    }
}

// 3. Definimos la función para mostrar los libros
function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
    } else {
        console.log("--- Libros que has leído ---");
        // Usamos un ciclo para imprimir cada uno con un índice
        for (let i = 0; i < librosLeidos.length; i++) {
            console.log(`${i + 1}. ${librosLeidos[i]}`);
        }
    }
}

// --- Pruebas del sistema ---

agregarLibro("El Principito");
agregarLibro("Cien años de soledad");
agregarLibro("Don Quijote de la Mancha");

mostrarLibrosLeidos();