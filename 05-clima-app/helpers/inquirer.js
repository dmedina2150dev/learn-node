import colors from 'colors';
// const inquirer = require('inquirer');
import inquirer from 'inquirer';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${ '1.'.green } Buscar ciudad`
            },
            {
                value: 2,
                name: `${ '2.'.green } Historial`
            },
            {
                value: 0,
                name: `${ '0.'.green } Salir`
            },
        ]
    }
];

const pausaOpcion = [
    {
        type: 'input',
        name: 'enter',
        message: `\nPresione ${'ENTER'.blue} para continuar\n`,
    }
]

const inquirerMenu = async () => {
    console.clear();
    console.log('=========================='.green);
    console.log('   Seleccione una opción'.white);
    console.log('==========================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async () => {
    
    console.log('\n');
    await inquirer.prompt(pausaOpcion);
}

const leerInput = async ( message ) => {
    const question = {
        type: 'input',
        name: 'desc',
        message,
        validate( value ) {
            if( value.length === 0 ) {
                return 'Por favor ingrese un valor';
            }

            return true;
        }
    }

    const { desc } = await inquirer.prompt( question );

    return desc;
}

const listarLugares =  async ( lugares = [] ) => {

    const choices = lugares.map( (lugar, index)  => {
        const idx = `${ index + 1 }.`.green;
        return {
            value: lugar.id,
            name: `${ idx } ${ lugar.nombre }`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    })

    const preguntas = [
            {
                type: 'list',
                name: 'id',
                message: 'Selecciona un lugar:',
                choices
            }
    ]

    const { id } = await inquirer.prompt( preguntas );

    return id;

}

const confirmar =  async ( message ) => {

    const pregunta = [
            {
                type: 'confirm',
                name: 'ok',
                message
            }
    ]

    const { ok } = await inquirer.prompt( pregunta );

    return ok;

}

const mostrarListadoChecklist =  async ( tareas = [] ) => {

    const choices = tareas.map( (tarea, index)  => {

        const idx = `${ index + 1 }.`.green;
        
        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`,
            checked: ( tarea.completadoEn ) ? true : false
        }
    });

    const pregunta = [
            {
                type: 'checkbox',
                name: 'ids',
                message: 'Seleccione',
                choices
            }
    ]

    const { ids } = await inquirer.prompt( pregunta );

    return ids;

}

export {
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares,
    confirmar,
    mostrarListadoChecklist
}
