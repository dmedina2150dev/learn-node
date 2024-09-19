const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        
        let salida = '';
    
        for (let mult = 1; mult <= hasta; mult++) {
            salida += ` ${base} * ${mult} = ${base * mult}\n`;
        }
        
        if (listar) {
            console.log(colors.green('================================='));
            console.log(colors.rainbow('            Tabla del ' + base));
            console.log(colors.green('================================='));
            console.log(salida.trap);
        }
    
        // TODO wirteFileSync Asincrono
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }

}

module.exports =  {
    crearArchivo
}