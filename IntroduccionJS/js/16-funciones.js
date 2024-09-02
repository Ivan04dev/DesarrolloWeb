// Declaración de la función: se puede utilizar antes de declararse
function sumar() {
    console.log(10 +10);
}

sumar();

// Expresión de la función
const restar = function() {
    console.log(20 - 10);
}

restar();

// IIFE: se invocan automáticamente
(function(){
    console.log('Función IIFE');
})