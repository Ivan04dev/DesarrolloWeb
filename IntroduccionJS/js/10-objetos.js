// Objetos

const nombreProducto = 'Monitor 20"';
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto: 'Monitor 20"',
    precio: 300,
    disponible: true
}

console.log(producto);
// console.log(producto.precio);
// console.log(producto.nombreProducto);
// console.log(producto['disponible']);

// Asignar Propiedades
producto.imagen = 'imagen.jpg';

// Eliminar Propiedades
delete producto.disponible;