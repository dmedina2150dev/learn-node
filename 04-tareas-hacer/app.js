import colors from 'colors';

import { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist } from './helpers/inquirer.js'
import { Tareas } from './models/tareas.js';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';


const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if ( tareasDB ) {
        // Cargar tareas
        tareas.cargarTareasFromArray( tareasDB );
    }

    do {
        
        opt = await inquirerMenu();
        // console.log({ opt });
        switch (opt) {
            case '1':
                // Crear Tarea
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea( desc );
                
                break;
            case '2':
                // Listar Tarea
                tareas.listadoCompleto();
                break;
            case '3':
                // Listar tareas completadas
                tareas.listarPendientesCompletadas();
                break;
            case '4':
                // Listar tareas pendientes
                tareas.listarPendientesCompletadas(false);      
                break;
            case '5':
                // Completado | pendiente
                const ids = await mostrarListadoChecklist( tareas.listadoArr );
                tareas.toggleCompletas( ids );
                break;
            case '6':
                const id =  await listadoTareasBorrar( tareas.listadoArr );
                
                if ( id !== '0' ) {
                    const eliminar = await confirmar('¿Está seguro de eliminar?');
                    if (eliminar) {
                        tareas.borrarTarea( id );
                        console.log('Tarea Eliminada!!');
                    }
                }


                break;

            default:
                break;
        }

         guardarDB( tareas.listadoArr );

        await pausa();
        
    } while ( opt != '0' );


}


main();


// TODO Codigo de prueba
// const { mostrarMenu, pausa } = require('./helpers/mensajes');// TODO Demostracion de como hacerlo manualmente
/**
 * 
 * const main = async () => {
 *   console.log('Hola mundo!')
 *   
 *   let opt = '';
 *   
 *   do {
 *       
 *               opt = await mostrarMenu();
 *               console.log({ opt });
 *
 *               if ( opt === '0' ) await pausa();
 *               
 *           } while ( opt != '0' );
 *
 *           
 *       }
 * 
*/
   
   
// import { Tarea } from './models/tarea.js';
/**
 * TODO Ejemplo de las Tareas
 * 
 * const tarea = new Tarea('comprar comida');
 * console.log( tarea );
 * const tareas = new Tareas();
 * tareas._listado[tarea.id] = tarea;
 * console.log( tareas );
 */