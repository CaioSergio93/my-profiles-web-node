const express = require('express');
const app = express();
const port = 3020;

// Importa as rotas do arquivo routes.js
const routes = require('./routes');
app.use(express.static('public'));

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
