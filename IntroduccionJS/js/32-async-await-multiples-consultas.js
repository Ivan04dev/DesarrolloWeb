function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere');

        setTimeout( () => {
            resolve('Los clientes fueron descargados');
        }, 5000)
    }) 
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere');

        setTimeout( () => {
            resolve('Los pedidos fueron descargados');
        }, 5000)
    }) 
}

async function app() {
    try {
        const resultado = await Promise.all( [descargarNuevosClientes(), descargarUltimosPedidos() ]);
        console.log(resultado[0]);
        console.log(resultado[1]);
        // Esta función espera hasta que se ejecute descargarNuevosClientes() y toma el resultado 
        // mostrarClientes(resultado);
        // console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}

app();