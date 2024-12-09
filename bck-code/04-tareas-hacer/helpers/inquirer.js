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
                value: '1',
                name: `${ '1.'.green } Crear Tarea`
            },
            {
                value: '2',
                name: `${ '2.'.green } Listar Tareas`
            },
            {
                value: '3',
                name: `${ '3.'.green } Listar Tareas completadas`
            },
            {
                value: '4',
                name: `${ '4.'.green } Listar Tareas pendientes`
            },
            {
                value: '5',
                name: `${ '5.'.green } Completar Tarea(s)`
            },
            {
                value: '6',
                name: `${ '6.'.green } Borra Tarea`
            },
            {
                value: '0',
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

const listadoTareasBorrar =  async ( tareas = [] ) => {

    const choices = tareas.map( (tarea, index)  => {
        const idx = `${ index + 1 }.`.green;
        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`
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
                message: 'Borrar',
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
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}
