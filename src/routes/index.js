const { Router } = require('express');
const usuarioRoutes = require('./usuarios');
const adminRoutes = require('./admins');

const routes = Router();

routes.use('/usuarios', usuarioRoutes);
routes.use('/admins', adminRoutes);

// Rota raiz
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'API rodando com sucesso 🚀' });
});

module.exports = routes;
