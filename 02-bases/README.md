## Temas puntuales de la sección

### Package.json

```javascript
npm init

npm init -Y --> Se crea con los valores por defecto
```

### Node Modules

### Scripts

En el package.json podemos crear nustros script para que ejecuten el código que necesites, ya sea para inicar la aplicación, correr los test, contruir el build de la aplicación, etc.

```javascript
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node src/app.js",
  "dev": "echo \"Hola mundo desde dev\""
},
```

### Importaciones y Exportaciones

Por defecto en NodeJs se utiliza la convención o estandar **CommonJS**

---
> Importa el modulo o Archivo y lo ejecuta

```javascript
require('{path file}');
```

---
> Importa de forma destructurada lo que se exponga del modulo o Archivo 

```javascript
const { emailTemplate } = require('./js-foundation/01-template');
```
---

> Forma tradicional de Exportar modulos desde un archivo

```javascript
module.exports = {
  nameFunction,
  constants,
  ...etc
};

O

module.exports = emailTemplate;
```

> Módulos

> Reforzamiento de JS

> Callbacks

> Arrow Functions

> Factory Functions

> Promises

> Async Await

> Peticiones Http básicas

> Dependencias de Producción y Desarrollo

> Patrón adaptador para nuestras dependencias
