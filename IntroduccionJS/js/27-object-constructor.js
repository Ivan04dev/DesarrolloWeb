// POO 

// Object Literal 
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const nuevoProducto = new Producto('Monitor 20 Pulgadas', 700, true);
console.log(nuevoProducto);

const nuevoProducto2 = new Producto('Mouse', 50, false);
console.log(nuevoProducto2);

const nuevoProducto3 = new Producto('Nintendo Swicth', 3000, true);
console.log(nuevoProducto3);