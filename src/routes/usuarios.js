const express = require('express');
const router = express.Router();
const UsuarioController = require('../modules/usuario/controllers/UsuarioController');
const ensureAuthenticated = require('../shared/middlewares/ensureAuthenticated') ;


router.post('/', UsuarioController.CreateUsuario);
router.post('/login', UsuarioController.loginUsuario);
router.use(ensureAuthenticated); // Protege as rotas abaixo, exigindo autenticação
router.get('/', UsuarioController.listUsuarios);    
router.get('/:id',UsuarioController.listUsuarioId);
router.put('/:id', UsuarioController.updateUsuario);
router.delete('/:id', UsuarioController.deleteUsuario);


module.exports = router;
