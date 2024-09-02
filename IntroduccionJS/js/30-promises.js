// promise: es un valor que podrá estar diponible, en un futuro o nunca

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false;
    auth ? resolve('Usuario Autenticado') : reject('No se pudo inciar sesión');
    
})

// console.log(usuarioAutenticado);

// En los promises existen 3 valores:
// Pending: No se ha cumplido pero no ha sido rechazada 
// Fulfilled: Ya se cumplió
// Rejected: Se ha rechazado o no se cumplió 

usuarioAutenticado
    .then( result => console.log(result) )
    .catch( error => console.log(error) )