const crear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const actualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: 10,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const borrar = {
    descripcion: {
        demand: true,
        alias: 'b',
        desc: 'Descripcion de la tarea por borrar'
    }
}


const argv = require('yargs')
    .command('crear', 'Crear un elemeno por hacer', crear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', actualizar)
    .command('borrar', 'Borra la tarea por hacer', borrar)
    .help()
    .argv


module.exports = {
    argv
}