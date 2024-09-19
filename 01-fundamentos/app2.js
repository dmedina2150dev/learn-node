//! Paquetes internos de Node
const fs = require('node:fs');

const data = fs.readFileSync('README.md', 'utf8'); // ! Lee un archivo
// console.log(data);

const newData = data.replace(/React/ig, 'Angular'); //! Reemplaza la data leida

fs.writeFileSync('README_ANGULAR.md', newData); // ! Genera un file nuevo