import colors from 'colors';
/**
 * _listado
 * { 'uuid-12313213-44556451-55321': { id: 132, desc: 'jklabskja', completadoEn:  26082022 } }
 */

import { Tarea } from "./tarea.js";

export class Tareas {
    
    #listado = {};

    get listadoArr() {
        const listado = [];

        Object.keys( this.#listado ).forEach( key => {
            listado.push( this.#listado[key] );
        });

        return listado;
    }

    constructor() {
        this.#listado = {};
    }

    cargarTareasFromArray ( tareas = [] ) {
        
        tareas.forEach( tarea  => {
            this.#listado[tarea.id] = tarea;
        });
    }

    crearTarea( desc = '' ) {
        const tarea = new Tarea( desc );

        this.#listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log();
        this.listadoArr.forEach( (tarea, index) => {
            const idx = `${ index + 1 + '.'}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) ? 'Completada'.green : 'Pendiente'.red;

            console.log( `${ idx } ${ desc } :: ${ estado }` );
        });
    }

    listarPendientesCompletadas( completadas = true ) {
        console.log();
        let contador = 0;
        this.listadoArr.forEach( (tarea) => {
            
            const { desc, completadoEn, estado } = tarea;

            if( completadas ) {
                // COmpletadas
                if ( completadoEn ) {
                    contador +=1;
                    console.log( `${ (contador + '.').green } ${ desc } :: ${ completadoEn.green }` );
                }
            } else {
                // Pendientes
                if ( !completadoEn ) {
                    contador +=1;
                    console.log( `${ (contador  + '.'.green).green } ${ desc }` );
                }
            }

        });
    }

    borrarTarea( id = '' ) {
        if ( this.#listado[id] ) {
            delete this.#listado[id];
        }
    }

    toggleCompletas( ids = [] ) {
        ids.forEach( id => {

            const tarea = this.#listado[id];

            if ( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString();
            }

        });

        this.listadoArr.forEach( tarea => {
            if ( !ids.includes(tarea.id) ) {
                this.#listado[tarea.id].completadoEn = null; 
            }
        } );
    }
}