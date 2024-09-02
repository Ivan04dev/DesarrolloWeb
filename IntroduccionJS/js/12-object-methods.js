// Ejecuta el código en modo estricto
'use strict';

const producto = {
    nombreProducto: 'Monitor 20"',
    precio: 300,
    disponible: true
}

// 'Congela' el objeto y no permite realizar modificaciones (agregar, eliminar, cambiar valor)
Object.freeze(producto);
console.log(Object.isFrozen(producto));

// 'Sella' el objeto y no permite realizar modificaciones (si permite modificar valores de propiedades existentes)
Object.seal(producto);
console.log(Object.isSealed(producto));

// Asignar Propiedades
producto.imagen = 'imagen.jpg';
console.log(producto);