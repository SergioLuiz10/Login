const express = require('express');
const router = express.Router();
const UsuarioController = require('../modules/usuario/controllers/UsuarioController');

router.post('/', UsuarioController.CreateUsuario);
router.get('/', UsuarioController.listUsuarios);    
router.get('/:id',UsuarioController.listUsuarioId);
router.put('/:id', UsuarioController.updateUsuario);
router.delete('/:id', UsuarioController.deleteUsuario);
module.exports = router;
