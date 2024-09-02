function obtenerEmpleados() {
    const archivo = 'empleados.json';

    fetch(archivo)
        // Almacena el resultado de la petición
        .then( resultado => resultado.json() )
        // En caso de ser correcta accede a los datos 
        .then( datos => {
            // Extrae la información del arreglo
            const { empleados } = datos;
            // Recorre el arreglo y muestra los datos
            empleados.forEach( empleado => console.log(empleado) );
        })
}

obtenerEmpleados();