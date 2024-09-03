// querySelector 
const heading = document.querySelector('.header__texto h2');
console.log(heading);
heading.textContent = 'Nuevo Heading';
heading.classList.add('nueva-clase');
console.log(heading);

// querySelectorAll 
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[1].classList.add('nueva-clase');
// enlaces[2].classList.remove('navegacion__enlace');
console.log(enlaces);

// getElementById
const heading2 = document.getElementById('heading');
heading2.textContent = 'Heading Modificado';

// Generar código con JavaScript
const nuevoEnlace = document.createElement('A');
nuevoEnlace.href = 'nuevo-enlace.html';
nuevoEnlace.textContent = 'Nuevo Enlace';
nuevoEnlace.classList.add('navegacion__enlace')
console.log(nuevoEnlace);

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

// Eventos 
console.log(1);

window.addEventListener('load', () => {
    // Se ejecutará hasta que se descargue el documento (HTML, CSS, IMG, JS)
    console.log(2);
})

window.onload = () => console.log(3)

// Sólo espera a que se descargue el código HTML 
document.addEventListener('DOMContentLoaded', () => console.log(4));

// Se puede utilizar un callback o una función definida
document.addEventListener('DOMContentLoaded', imprimir);

console.log(5);

function imprimir() {
    console.log(7)
}

// window.onscroll = () => console.log('scrolling');

/* Seleccionar elementos y asociarles un evento 
const btnEnviar = document.querySelector('.boton--primario');
// Puede estar asociado a cualquier elemento (botón, imagen, etc)
btnEnviar.addEventListener('click', function(e) {
    console.log(e);
    e.preventDefault();
    // Validar Formulario

    console.log('Enviando Formulario')
})
*/

// Eventos en Inputs y TextArea     

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerValor)
email.addEventListener('input', leerValor)
mensaje.addEventListener('input', leerValor)

function leerValor(e) {
    // Asigna el valor a cada propiedad del objeto por el id (debn de ser iguales)
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

// Evento submit: tiene que estar asociado al formulario y tener un input:submit
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validar el formulario
    const { nombre, email, mensaje } = datos;
    if(nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    // Enviar el formulario
    mostrarAlerta('Formulario enviado correctamente', 'success')
})

function mostrarAlerta(mensaje, tipo) {
    const alerta = document.createElement('p');
    // Agrega el mensaje a la alerta 
    alerta.textContent = mensaje;
    // Evalua el tipo para asignar la clase 
    tipo === 'error' ?  alerta.classList.add('error') : alerta.classList.add('success');
    // Agrega la alerta en el formulario 
    formulario.appendChild(alerta);

    // Elimina la alerta después de 5 seg
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}