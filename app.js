
const colors = require('colors');

const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];


switch (comando) {
    case "listar":
        let listado = porHacer.getListado();

        for (let lista of listado) {
            console.log("======= Tarea por Hacer =======".green);
            console.log("Tareas:" + lista.descripcion.blue);

            if (!lista.completado) {
                console.log("Estado:".white + "False".red);
            }else {
                console.log("Estado:".white + "True".brightYellow);
            }
            console.log("===============================".green);
        }
        break;

    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case "actualizar":
        let actual = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actual);
        break;

    case "borrar":
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;

    default:
        console.log('Comando no reconocido', );
        break;
}
