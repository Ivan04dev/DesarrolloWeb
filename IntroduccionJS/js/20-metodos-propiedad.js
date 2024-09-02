const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo Canción con id: ${id}`)
    }, 
    pausar: function() {
        console.log('Pausando')
    },
    crearPlayList: function(nombre) {
        console.log(`Creando playlist ${nombre}`)
    },
    reproducirPlayList: function(nombre) {
        console.log(`Reproduciendo playlist ${nombre}`)
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción con id: ${id}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(1);
reproductor.crearPlayList('Gym');
reproductor.reproducirPlayList('Gym');