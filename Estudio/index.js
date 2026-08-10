function saludar(nombre){
    console.log("Hola, " + nombre + "!");
}

saludar("Angel");

function sumar (a, b) {
    return a + b;
}
let resultado = sumar (3, 5);
console.log(resultado);

let x = 10; // variable global
function mostrarX(){
    let y = 5; // variable local
    
    console.log("X es: " + x);
    console.log("Y es: " + y);
}
mostrarX();
console.log(x);
// console.log(y);