const express = require('express');
const router = express.Router();
const adminController = require('../modules/admin/controllers/adminController');

router.post('/', adminController.createAdmin);
router.get('/', adminController.listAdmins);
router.get('/:id', adminController.listAdminById);
router.put('/:id', adminController.updateAdmin);
router.delete('/:id', adminController.deleteAdmin);


module.exports = router;
