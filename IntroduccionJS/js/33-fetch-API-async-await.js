async function obtenerEmpleados() {
    const archivo = 'empleados.json';

    const resultado = await fetch(archivo);
    const datos = await resultado.json()
    const empleados = { datos };
    console.log(typeof(empleados))
    empleados.forEach( empleado => console.log(empleado) );
}

obtenerEmpleados();