const producto = {
    nombreProducto: 'Monitor 20"',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

// spreed operator: une dos objetos y crea uno nuevo
const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(medidas);
console.log(nuevoProducto);
