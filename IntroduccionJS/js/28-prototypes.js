// Object Constructor
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

const nuevoProducto = new Producto('Monitor 20 Pulgadas', 700, true);
// console.log(nuevoProducto);

Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
}

console.log(nuevoProducto.formatearProducto());

const nuevoCliente = new Cliente('Apple', 'Inc');

Cliente.prototype.formatearCliente = function() {
    return `El Cliente es: ${this.nombre} ${this.apellido}`;
}

console.log(nuevoCliente.formatearCliente());