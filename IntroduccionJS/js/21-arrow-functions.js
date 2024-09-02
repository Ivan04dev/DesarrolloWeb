const sumar = (n1, n2) => n1 + n2;
let resultado = sumar(10, 15);
console.log(resultado);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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

meses.forEach( mes => console.log(mes) );

meses.forEach( mes => {
    mes ? console.log( `${mes} si existe` ) : console.log( `${mes} no existe` );
})

console.log('======================================================');

meses.forEach(function(mes){
    if(mes === 'Marzo') {
        console.log(`${mes} si existe en el arreglo`);
    }
})

meses.forEach( mes => {
    if(mes === 'Marzo') {
        console.log(`${mes} si existe en el arreglo`);
    }
});

meses.forEach( mes => mes === 'Marzo' ? console.log( `${mes} si existe` ) : '' );

console.log('======================================================');

// Array Methods

// Includes: realiza la búsqueda de un elemento en un arreglo y devuelve true/false 
resultado = meses.includes('Diciembre');
console.log(resultado ? 'Si existe' : 'No existe');

// Some: similar a includes, se utiliza en objetos
resultado = carrito.some( producto => producto.nombre === 'Celular' );
console.log(resultado ? 'Si existe' : 'No existe');

// Reduce: devuelve el total 
resultado = carrito.reduce( (total, producto) => total + producto.precio, 0 );
console.log(resultado);

// Filter: realiza una búsqueda, ya sea de un elemento, mayor/menor/igual, distinto a, etc y devuelve un arreglo con el resultado
resultado = carrito.filter( producto => producto.nombre === 'Laptop' );
console.log(resultado);

resultado = carrito.filter( producto => producto.nombre !== 'Laptop' );
console.log(resultado);

resultado = carrito.filter( producto => producto.precio >= 500 );
console.log(resultado);