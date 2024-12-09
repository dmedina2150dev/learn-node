// TODO (fs) FileSystem
const { crearArchivo } = require('./helpers/multiplicar');

// TODO congiguracion Yargs
const argv = require('./config/yargs');

require('colors')

console.clear();


// console.log( argv );
// console.log( 'base: yargs', argv.base );

crearArchivo( argv.base, argv.listar, argv.hasta )
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado'.blue ) )
    .catch( console.log );


/** **************************************************************************
 *  *************************  CODIGO DE DOCUMENTACION ***********************
 * ***************************************************************************
 */
// TODO writeFile Sincrono
// fs.writeFile( `tabla-${num}.txt`, salida, ( err ) => {
//     if (err) throw err;

//     console.log(`tabla-${num}.txt creada`);
// });

// TODO ver argumentos enviados desde la consola
/**
 * El primer parametro recibido es el path donde esta instalado node en el computador
 * El segundo parametro recibido es el path donde esta la aplicacion ejecutandose
 */
// console.log( process.argv );

// TODO  arg3 = 'base=5' ] dandole un valor por defecto si no se envia argumento en la consola
// const [ , , arg3 = 'base=5' ] = process.argv; 
// console.log( 'Parametro recibido', arg3 );

// TODO   base = 5 ] dandole un valor por defecto si no se envia argumento en la consola
// const [ , base = 5 ] = arg3.split('=');
// console.log( 'Valor recibido', base );
