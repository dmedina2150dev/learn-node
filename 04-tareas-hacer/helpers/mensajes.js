require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('=========================='.green);
        console.log('   Seleccione una opción'.green);
        console.log('==========================\n'.green);
        console.log(`${'1'.green}. Crear una tarea`);
        console.log(`${'2'.green}. Listar una tarea`);
        console.log(`${'3'.green}. Listar tareas copmpletadas`);
        console.log(`${'4'.green}. Listar tareas pendientes`);
        console.log(`${'5'.green}. Completar tarea(s)`);
        console.log(`${'6'.green}. Borrar una tarea`);
        console.log(`${'0'.green}. Salir \n`);

        // TODO Preparamos la interfaz 
        const readline = require('readline').createInterface({
            input: process.stdin, // TODO Pausa la aplicacion y espera la interaccion del usuario
            output: process.stdout // TODO Para mostrar un mesaje en consola cuando le pido algo en consola
        });

        // TODO para hacer la pregunta por cosola al el usuario 
        // Segundo parametro obtiene la respuesta
        readline.question('Seleccione una opción: ', (opt) => {
            // console.log(opt)
            // TODO hay que cerrarlo para que no se quede esperando despues de la respuesta del usuario
            readline.close();

            resolve(opt);
        });

    });
}


const pausa = () => {
    return new Promise( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${'ENTER'.blue} para continuar\n`, (opt) => {
            readline.close();
            resolve();
        });
    });
}



module.exports = {
    mostrarMenu,
    pausa
}