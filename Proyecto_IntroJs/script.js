const formularioReceta = document.getElementById('formulario-receta');
const contenedorRecetas = document.getElementById('contenedor-recetas');
const STORAGE_KEY = 'recetarioRecetas';

function obtenerRecetas() {
    const datos = localStorage.getItem(STORAGE_KEY);
    return datos ? JSON.parse(datos) : [];
}

function guardarRecetas(recetas) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recetas));
}

function crearElementoReceta(receta, index) {
    const articulo = document.createElement('article');
    articulo.className = 'receta-item';

    articulo.innerHTML = `
        <div class="receta-cabecera">
            <h3>${receta.titulo}</h3>
            <button class="boton-eliminar" type="button">Eliminar</button>
        </div>
        <p><strong>Tiempo:</strong> ${receta.tiempo} min · <strong>Dificultad:</strong> ${receta.dificultad} · <strong>Porciones:</strong> ${receta.porciones}</p>
        <p><strong>Ingredientes:</strong></p>
        <pre>${receta.ingredientes}</pre>
        <p><strong>Preparación:</strong></p>
        <pre>${receta.preparacion}</pre>
    `;

    const botonEliminar = articulo.querySelector('.boton-eliminar');
    botonEliminar.addEventListener('click', () => eliminarReceta(index));

    return articulo;
}

function eliminarReceta(index) {
    const recetas = obtenerRecetas();
    recetas.splice(index, 1);
    guardarRecetas(recetas);
    mostrarRecetas();
}

function eliminarTodasRecetas() {
    localStorage.removeItem(STORAGE_KEY);
    mostrarRecetas();
}

function mostrarRecetas() {
    const recetas = obtenerRecetas();
    contenedorRecetas.innerHTML = '';

    if (recetas.length === 0) {
        const mensaje = document.createElement('p');
        mensaje.textContent = 'No hay recetas guardadas aún.';
        contenedorRecetas.appendChild(mensaje);
        return;
    }

    recetas.forEach((receta, index) => {
        contenedorRecetas.appendChild(crearElementoReceta(receta, index));
    });
}

formularioReceta.addEventListener('submit', event => {
    event.preventDefault();

    const nuevaReceta = {
        titulo: document.getElementById('nombre-receta').value.trim(),
        ingredientes: document.getElementById('ingredientes').value.trim(),
        preparacion: document.getElementById('preparacion').value.trim(),
        tiempo: document.getElementById('tiempo').value.trim() || 'N/A',
        dificultad: document.getElementById('dificultad').value,
        porciones: document.getElementById('porciones').value.trim() || 'N/A',
        fecha: new Date().toISOString()
    };

    const recetas = obtenerRecetas();
    recetas.push(nuevaReceta);
    guardarRecetas(recetas);
    mostrarRecetas();
    formularioReceta.reset();
});

const botonEliminarTodas = document.getElementById('boton-eliminar-todas');
botonEliminarTodas.addEventListener('click', eliminarTodasRecetas);

mostrarRecetas();
