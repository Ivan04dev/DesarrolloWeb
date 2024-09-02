// this: accede a las propiedades del objeto, en lugar de reservacion.nombre se utiliza this.nombre, no funciona con () =>

const reservacion = {
    nombre: 'Ivan', 
    apellido: 'Delgado',
    total: 1000, 
    pagado: false, 
    informacion: function() {
        console.log(`Cliente: ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

console.log(reservacion.nombre);
reservacion.informacion();