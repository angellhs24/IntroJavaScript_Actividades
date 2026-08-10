// Seleccionamos los elementos del DOM
const form = document.getElementById('comment-form');
const input = document.getElementById('comment-input');
const container = document.getElementById('comments-container');

// Escuchamos el evento de envío del formulario
form.addEventListener('submit', function(event) {
    // Evita que la página se recargue al enviar el formulario
    event.preventDefault();

    // Obtener el texto y la fecha actual
    const text = input.value;
    const now = new Date();
    const dateTime = now.toLocaleString(); // Formato: DD/MM/AAAA, HH:MM:SS

    // Crear el elemento del comentario (un div)
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    // Insertar contenido HTML dentro del nuevo div
    commentDiv.innerHTML = `
        <small>${dateTime}</small>
        <p>${text}</p>
        <button class="delete-btn">Eliminar</button>
    `;

    // Agregar funcionalidad al botón de eliminar
    const deleteBtn = commentDiv.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        container.removeChild(commentDiv);
    });

    // Agregar el comentario al contenedor principal
    container.prepend(commentDiv); // 'prepend' lo pone al principio de la lista

    // Limpiar el campo de texto
    input.value = '';
});