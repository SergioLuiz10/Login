require('dotenv').config();
const express = require('express');
const app = express();

const routes = require('./routes'); 
const errorHandler = require('./shared/middlewares/errorHandler');


app.use(express.json());
app.use(routes); 
app.use(errorHandler);

app.listen(3000, () => {
  console.log('🚀 Servidor rodando na porta 3000');
});
