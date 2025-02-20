# Node - Code Execution


Si todos estos se disparan al mismo tiempo ¿Quien se ejecuta primero?

```javascript
setTimeout(cb1, 0);

Promise.resolve().then( cb2 );

process.nextTick( cb3 );

fs.readFile( 'file.txt', cb4 );

setImmediate( cb5 );
```

**Blocking & Single-threaded**

Javascript por defecto es bloqueante y se ejecutan en un solo hilo. Esto lo resolvio Nodejs.

### 3 Componentes principales de Node

![Image](./image/code-node.png)

* Dependencias externas
* Características de C++
* Librerias de JS que se conectan con C++ desde nuestro código

Esto permite que podamos conectarnos con el fileSystem, librerias de encriptación.

### libuv

Aquí entra en juego esta libreria, que es la que permite a Nodejs ejecutar tareas asíncronas, callbacks.


### Ejecución de código

Cuando ejecutamos `node app.js` NodeJs crear una función global `main()` (Call Stack) esta función global nos entrega ciertas variables de entorno, conoce el entorno donde se esta ejecutando y varias propiedades.

Como se ejecutaria el archivo


1. Barre todo el archivo y encuentra referencias, la coloca en el (Call Stack) la registra o ejecuta y la elimina. [Leer más](https://nodejs.org/es/learn/asynchronous-work/event-loop-timers-and-nexttick) y [explicación diferente](https://www.builder.io/blog/visual-guide-to-nodejs-event-loop)
2. Si recibe un callback se pasa a Libuv y en el call stack
3. Libuv maneja el tiempo en que se podra ejecutar el callback y funciona **first in / first Out**


# Node - Event Loop

El Event Loop sigue ciertas reglas para decidir el orden de la ejecución de las tareas

1. Callbacks en el microtask se ejcutan primero.
2. Luego todos los callbacks dentro del timer queue se ejecutan.
3. Callbacks en el microtask queue (si hay) se ejecutan despúes de los callback timers, primero tareas en el nextTick queue y luego en el promise queue.
4. Callbacks de I/O se ejecutan. (I/O inputs/Outputs).
5. Callbacks en el microtask queue se ejecutan (si hay), y luego promise queue (si hay).
6. Todos los callbacks en el check queue se ejecutan.
7. Callbacks en el microtask se ejecutan despúes de cada callback en el check queue. (Siguiendo el mismo orden anterior, nextTick y luego promise).
8. Todos los callbacks en el close queue son ejecutados.
9. Por una última vez en el mismo ciclo, los microtask queues son ejecutados de la misma forma, nextTick y luego promise queue.

