const puntaje = 1000;

if(puntaje === 1000) {
    console.log('El puntaje es 1000');
}

let saldo = 2000;
let total = 1500;

if(saldo >= total) {
    console.log('Es posible realizar el pago');
} else {
    console.log('Fondos insuficientes');
}

let rol = '';

if(rol === 'Administrador') {
    console.log('Tienes acceso total');
} else if(rol === 'Programador') {
    console.log('Tienes acceso al código');
} else {
    console.log('No tienes acceso');
}