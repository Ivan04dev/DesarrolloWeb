const numeros = [10, 20, 30, 40, 50];
console.log(numeros);
console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.log(meses);
console.table(meses);

/* Acceder a los elementos del arreglo
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);
*/

// Longitud del arreglo
console.log(`Longitud del arreglo: ${numeros.length}`);

// Iterar el arreglo con forEach 
meses.forEach( function(mes){
    console.log(mes);
})

// Array Methods 

// Agrega al final del arreglo
numeros.push(60);

// Agrega al principio del arreglo
numeros.unshift(0);

// Elimina el último elemento del arrreglo
numeros.pop();

// Elimina el primer elemento del arreglo
numeros.shift();

// Elimina uno o varios elementos a partir de un índice
numeros.splice(2, 1); // 10, 20, 30, 40, 50 (Elimina 30)

console.log(numeros);

// Rest Operator: crea un nuevo arreglo a partir de uno o más arreglos
const nuevoArreglo = [...numeros, ...meses];
console.log(nuevoArreglo);

const mesesDos = [...meses, 'Junio'];
console.log(mesesDos);

const mesesTres = ['nuevoMes', ...meses];
console.log(mesesTres);