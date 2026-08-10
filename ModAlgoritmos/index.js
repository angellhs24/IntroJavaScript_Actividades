function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

Producto.prototype.obtenerDetalles = function() {
    return `Producto: ${this.nombre}, Precio: ${this.precio}`;
};

const producto1 = new Producto('Laptop', 1200);
console.log(producto1.obtenerDetalles());