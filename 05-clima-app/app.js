import colors from 'colors';
import * as dotenv from 'dotenv';
dotenv.config();
import { pausa, inquirerMenu, leerInput, listarLugares  } from './helpers/inquirer.js';
import { Busquedas } from './models/busquedas.js';

const main = async () => {
    const busquedas = new Busquedas();
    let opt;

    do {
        
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                // console.log('Selecciono opcion 1')
                // TODO Mostrar mensaje
                const termino = await leerInput('Ciudad: ');
                
                // TODO Buscar los lugares
                const lugares = await busquedas.ciudades( termino );
                // console.log( lugares );

                // TODO Seleccionar el lugar
                const seleccion =  await listarLugares( lugares );
                if( seleccion === '0' ) continue;
                const lugarSeleccionado = lugares.find( l => l.id === seleccion );

                // TODO guardar en DB
                busquedas.agregarHistorial( lugarSeleccionado.nombre );

                // TODO Datos del Clima
                const clima = await busquedas.climaLugar( lugarSeleccionado.lat, lugarSeleccionado.lng );
                // console.log( clima );

                // TODO Monstrar resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log( 'Ciudad:', lugarSeleccionado.nombre.green );
                console.log( 'Latitud:', lugarSeleccionado.lat );
                console.log( 'Longitud:', lugarSeleccionado.lng );
                console.log( 'Temperatura:', clima.temp );
                console.log( 'Minima:', clima.min );
                console.log( 'Maxima:', clima.max );
                console.log( 'Como está el clima:', clima.desc.green );

                break;
            case 2:
                busquedas.historialCapitalizado.forEach( (lugar, i) => {
                    const idx = `${ i + 1 }.`.green;
                    console.log( `${ idx } ${ lugar }` );
                } );
                break;

            default:
                break;
        }

        if( opt !== 0 )  await pausa();
        
    } while ( opt !== 0 );

}

// console.log(process.env);// TODO Para ver todas las variables de entorno 
main();