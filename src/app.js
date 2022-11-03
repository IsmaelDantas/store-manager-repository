const express = require('express');
const { routerProduct } = require('./router/router.product');
const errorCheck = require('./middlewares/error');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/products', routerProduct);
app.use('/products/:id', routerProduct);

app.use(errorCheck);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;