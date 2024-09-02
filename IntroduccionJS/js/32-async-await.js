function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere');

        setTimeout( () => {
            resolve('Los clientes fueron descargados');
        }, 5000)
    }) 
}

async function app() {
    try {
        const resultado = await descargarNuevosClientes();
        // Esta función espera hasta que se ejecute descargarNuevosClientes() y toma el resultado 
        // mostrarClientes(resultado); AUN NO ESTÁ DEFINIDA
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}

app();