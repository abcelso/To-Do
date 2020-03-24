const opcCrear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: "Esto crea la tarea"
    }
};

const opcActual = {
    descripcion: {
        demand: "hello",
        alias: 'd',
        desc: "descripcion de la tarea"
    },
    completado: {
        default: true,
        alias: 'c',
        desc: "no indica si se termino la tarea"
    }
};

const opcBorrar = {
  descripcion: {
      demand: true,
      alias: 'd'
  }
};


const argv = require('yargs')
    .command('crear',"Crea una nueva tarea por hacer", opcCrear)
    .command("borrar", "Borra una tarea", opcBorrar)
    .command("actualizar", "Modifica una tarea por hacer", opcActual)
    .help()
    .argv;


module.exports = {
    argv
};
