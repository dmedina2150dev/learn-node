# NodeJs

> ¿Qué es NodeJs?

NodeJs es básicamente un ambiente de ejecución para Javascript, desligado del navegador.

> ¿Qué lo hace especial?

- **Motor**
Código abierto con el motor V8 de Google y esta diseñado para realizar tareas de E/S (Entrada/Salida) junto con el manejo de archivos de la computadora cliente / servidor

- **Características**
* Asincronía
* Módulos nativos y de terceros
* Gestíon de paquetes con NPM
* Contruccíon de servidores
* Escalabilidad
* Múltiple plataforma

* Non-Blocking I/O
  > Casi ninguna función de Node bloquea la lectura, por lo que podemos tener cientos de peticiones sin bloquear el servidor. Gracias a **[libuv](https://libuv.org/)**

[Ref NodeJs](https://nodejs.org/es/learn/asynchronous-work/overview-of-blocking-vs-non-blocking)

* Blocking
> Básicamente cuando la ejecución del código debe de esperar a que se complete el proceso pero este a su vez, impide que se sigan ejecutando otras instrucciones en paralelo.


### NPM
NPM **(Node package manager)** es el gestor de paquetes con mayor crecimiento y paquetes desplegados*.

Node también es muy usado para crear herramientas y ejecutar paquetes sin tener que instalarlos con NPX **(Node package execute)**

```
npm init

npm init -Y --> Se crea con los valores por defecto
```

### BUSCAR semantic version

[semver.org](https://semver.org/)

Dado un número de versión MAYOR.MENOR.PATCH, incrementa la:

__Versión MAYOR__: 
> cuando realices cambios incompatibles en la API

__Versión MENOR__:
> cuando agregues funcionalidad de manera compatible hacia atrás

__Versión PATCH__: 
> cuando realices correcciones de errores compatibles hacia atrás

Etiquetas adicionales para pre-lanzamiento y metadatos de compilación están disponibles como extensiones al formato MAYOR.MENOR.PATCH.

### CREAR UN SERVIDOR CON EXPRESS

[NPM Express](https://www.npmjs.com/package/express)

[Documentacion](https://expressjs.com/es/)

```console
 npm install express
````

```javascript
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

### Frameworks para crear pagina web renderizables desde el servidor dinamicas**

[Handlebars.js web](https://handlebarsjs.com/)

[Handlebars.js Github](https://github.com/pillarjs/hbs)

[Handlebars.js](https://www.npmjs.com/package/handlebars)


#### Node Code Execution

[The Node.js Event Loop](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)

Node tiene __3 componentes (características) principale

![Img Code Node](./01-fundamentos/image/code-node.png)

* Dependencias externas
  - V8
  - libuv
  - zlib
  - crypto
  - etc.... grande

__libuv__: Le permite a Node trabajar en tareas asincronas, callbacks o cualquier código que requira esperar una ejecución o respuesta.

> [Web Oficial](https://libuv.org/)

* Características de C++
* Librerias de JS que se conectan con C++ desde nuestro Código