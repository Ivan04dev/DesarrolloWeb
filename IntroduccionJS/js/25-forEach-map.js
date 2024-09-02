const carrito = [
    { nombre: 'Monitor 20"', precio: 500 },
    { nombre: 'Televisión 50"', precio: 700 },
    { nombre: 'Tablet 10"', precio: 300 },
    { nombre: 'Audífonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 }
];

// forEach: recorre el arreglo, se utiliza para mostrar datos en consola
carrito.forEach( elemento => console.log(elemento) );

// map: crea un nuevo arreglo, en este ejemplo crea un arreglo con los nombres de los productos
const nuevoArreglo = carrito.map( producto => producto.nombre);
console.log(nuevoArreglo)