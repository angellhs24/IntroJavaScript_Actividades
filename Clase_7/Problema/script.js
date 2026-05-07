const display = document.getElementById('password-display');
const slider = document.getElementById('length-slider');
const lengthVal = document.getElementById('length-val');
const btn = document.getElementById('generate-btn');

// Diccionarios de caracteres
const keys = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~`|}{[]:;?><,./-="
};

// Actualizar el número visual del slider
slider.addEventListener('input', () => {
    lengthVal.innerText = slider.value;
});

function generatePassword() {
    let charset = "";
    let password = "";

    // 1. Verificar qué opciones están marcadas y sumarlas al banco
    if (document.getElementById('uppercase').checked) charset += keys.upper;
    if (document.getElementById('lowercase').checked) charset += keys.lower;
    if (document.getElementById('numbers').checked) charset += keys.number;
    if (document.getElementById('symbols').checked) charset += keys.symbol;

    // Si no hay nada seleccionado, avisar al usuario
    if (charset === "") {
        alert("¡Selecciona al menos una opción!");
        return;
    }

    // 2. Generar la cadena aleatoria
    for (let i = 0; i < slider.value; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    // 3. Mostrar en pantalla
    display.value = password;
}

btn.addEventListener('click', generatePassword);