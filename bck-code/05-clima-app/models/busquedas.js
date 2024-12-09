import * as fs from 'fs';
import axios from "axios";


export class Busquedas {


    historial = [];
    dbPath = './db/database.json';

    constructor() {
        // TODO: Leer DB si existe
        this.leerDB();
    }

    get historialCapitalizado() {
        return this.historial.map( lugar => {
            let palabras = lugar.split(' ');
            palabras = palabras.map( p => p[0].toUpperCase() + p.substring(1) )

            return palabras.join(' ');
        })
    }

    get paramsMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es',
        }
    }

    get paramsOpenweather() {
        return {
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es',
        }
    }

    async ciudades(lugar = '') {

        try {
            // TODO Peticion http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapBox
            });

            // console.log( 'Ciudad:', lugar);
            const resp = await instance.get();
            // const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Madrid.json?language=es&limit=5&access_token=pk.eyJ1IjoiZG1lZGluYTIxNTBkZXYiLCJhIjoiY2w5dGEyaG52MDUyZzNucXlpYnB2cWlrYyJ9.rr2fBCDowGf5C5NUxHinFw');
            // console.log(resp.data.features)
            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }) ); // TODO Retornara los lugarres que coincidan con el lugar

        } catch (error) {
            return [];
        }
    }

    async climaLugar( lat, lon ) {
        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {
                    lat,
                    lon,
                    ... this.paramsOpenweather
                }
            });

            const resp = await instance.get();
            // console.log( resp.data )
            const { weather, main } = resp.data;

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }

        } catch (error) {
            return [];
        }
    }

    agregarHistorial( lugar = '' ) {
        // TODO Prevenir duplicado

        if( this.historial.includes( lugar.toLowerCase() ) ) {
            return;
        }

        this.historial = this.historial.splice(0, 5);

        this.historial.unshift( lugar.toLowerCase() );

        // TODO grabar en DB
        this.guardarDB();
    }

    guardarDB() {
        const payload = {
            historial: this.historial
        }

        fs.writeFileSync( this.dbPath, JSON.stringify( payload ) )
    }

    leerDB() {
            
        if( !fs.existsSync(this.dbPath) ) {
            return;
        }

        const data = JSON.parse( fs.readFileSync( this.dbPath, { encoding: 'utf-8' } ) );

        this.historial = [ ...data.historial ];

    }

}