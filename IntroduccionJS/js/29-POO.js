class Producto{
    // Se utiliza constructor de manera explícita para definir la estructura del objeto
    constructor(nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    verDisponibilidad(valor) {
        valor = this.disponible ? 'Disponible' : 'No Disponible';
        return valor;
    }

    mostrarDatos(){
        console.log(`Datos del producto: ${this.nombre}, precio: $${this.precio} ${this.verDisponibilidad()}`);
    }
}

const producto1 = new Producto('Monitor 20"', 700, true);

producto1.mostrarDatos();

// Herencia
class Libro extends Producto{
    constructor(nombre, precio, disponible, isbn) {
        super(nombre, precio, disponible)
        this.isbn = isbn;
    }

    mostrarDatos() {
        console.log(`${super.mostrarDatos()} y su ISBN es ${this.isbn}`);
    }
}

const libro1 = new Libro('Fortaleza Digital', 500, true, '8489367019')
// console.log(libro1);

libro1.mostrarDatos();
