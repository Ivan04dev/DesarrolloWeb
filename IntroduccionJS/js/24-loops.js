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

// For
console.log('for');
for(let i = 0; i < 10; i++) {
    // console.log(i)
}

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
}

// While
console.log('while');
let i = 0;

/*
while(i < 10){
    console.log(i);
    i++;
}
*/

while(i < carrito.length){
    console.log(carrito[i]);
    i++;
}

// Do While 
console.log('do while');

let j = 0;

do{
    console.log(carrito[j]);
    j++;
}while(j < carrito.length);