const express = require('express');
const router = express.Router();
const adminController = require('../modules/admin/controllers/adminController');
const ensureAuthenticated = require('../shared/middlewares/ensureAuthenticated');


router.post('/', adminController.createAdmin);
router.post('/login', adminController.loginAdmin);
router.use(ensureAuthenticated); // Protege as rotas abaixo, exigindo autenticação
router.get('/', adminController.listAdmins);
router.get('/:id', adminController.listAdminById);
router.put('/:id', adminController.updateAdmin);
router.delete('/:id', adminController.deleteAdmin);

module.exports = router;
