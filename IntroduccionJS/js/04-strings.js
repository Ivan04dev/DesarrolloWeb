// Strings o cadenas de texto

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
const producto2 = String('Monitor 30"');
const producto3 = new String('Monitor 50"');

console.log(typeof producto); // string
console.log(typeof producto2); // string
console.log(typeof producto3); // object

// Métodos para Strings 
const producto4 = 'Monitor HD';

// Devuelve la cantidad de caracteres
console.log(tweet.length); 

// IndexOf: Devuelve la posición en donde se encuentra la búsqueda
console.log(tweet.indexOf('JavaScript'));

// Includes: Devuelve true o false si encuentra el valor a buscar
console.log(tweet.includes('JavaScript'));