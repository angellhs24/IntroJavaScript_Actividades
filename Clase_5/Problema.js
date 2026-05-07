// Definición del objeto libro
const libro = {
    // Propiedades básicas
    titulo: "Crónica de una muerte anunciada",
    autor: "Gabriel García Márquez",
    anio: 1981,
    estado: "disponible",
    
    // Propiedad adicional: Lista de capítulos
    capitulos: [],

    // Método para describir el libro
    describirLibro: function() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}. El estado actual es: ${this.estado}.`);
    },

    // Método para agregar capítulos
    agregarCapitulo: function(nombreCapitulo) {
        this.capitulos.push(nombreCapitulo);
        console.log(`Capítulo "${nombreCapitulo}" agregado.`);
    },

    // Método para eliminar el último capítulo
    eliminarCapitulo: function() {
        if (this.capitulos.length > 0) {
            let eliminado = this.capitulos.pop();
            console.log(`Capítulo "${eliminado}" eliminado.`);
        } else {
            console.log("No hay capítulos para eliminar.");
        }
    },
    
    // Método para ver la tabla de contenidos
    listarCapitulos: function() {
        console.log(`Capítulos de "${this.titulo}":`, this.capitulos.join(", ") || "Lista vacía");
    }
};

// --- Pruebas del objeto ---

// 1. Mostrar descripción inicial
libro.describirLibro();

// 2. Gestionar capítulos
libro.agregarCapitulo("La llegada de Santiago Nasar");
libro.agregarCapitulo("El juicio de los gemelos Vicario");
libro.listarCapitulos();

// 3. Eliminar un capítulo y cambiar estado
libro.eliminarCapitulo();
libro.estado = "prestado";

// 4. Mostrar información actualizada
libro.describirLibro();
libro.listarCapitulos();