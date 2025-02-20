//! Paquetes internos de Node
const fs = require('node:fs');

/**
 * @path primer parametro que recibe ruta o file que se desea leer
 * @endofing 'utf8' --> Se especifica para no recibir el retorno del binario del archivo leido
 */
const data = fs.readFileSync('README.md', 'utf8'); // ! Lee un archivo
// console.log(data);

// /React/ig --> (ig) significa case insensitive
const newData = data.replace(/React/ig, 'Angular'); //! Reemplaza la data leida

fs.writeFileSync('README_ANGULAR.md', newData); // ! Genera un file nuevo