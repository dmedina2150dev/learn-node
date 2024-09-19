import * as fs  from 'fs';
const archivo = './db/data.json';

export const guardarDB = ( data ) => {
    fs.writeFileSync( archivo, JSON.stringify(data) );
}

export const leerDB = () => {
    
    if( !fs.existsSync(archivo) ) {
        return null;
    }

    const data = JSON.parse( fs.readFileSync( archivo, { encoding: 'utf-8' } ) );

    return data;
}
