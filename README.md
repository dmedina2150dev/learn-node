**INICIALIZAR PACKAGE.JSON**

``
$ npm init
$ npm init -Y // Se crea con los valores por defecto
``

**BUSCAR semantic version**


**CREAR UN SERVIDOR CON EXPRESS**

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

**Frameworks para crear pagina web renderizables desde el servidor dinamicas**

[Handlebars.js web](https://handlebarsjs.com/)

[Handlebars.js Github](https://github.com/pillarjs/hbs)

[Handlebars.js](https://www.npmjs.com/package/handlebars)