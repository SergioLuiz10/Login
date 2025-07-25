const {Admin} = require('../../../database/models');
const AppError = require('../../../shared/errors/AppError');
const ADMIN_NAO_ENCONTRADO = require('../../../shared/constants/ErroCodes').ADMIN_NAO_ENCONTRADO;
class DeleteAdminService {
    async execute(id) {
        const admin = await Admin.findByPk(id);
    
        if (!admin) {
     throw new AppError(
    ADMIN_NAO_ENCONTRADO.message,
    ADMIN_NAO_ENCONTRADO.statusCode,
    ADMIN_NAO_ENCONTRADO.details,
     ADMIN_NAO_ENCONTRADO.code
       )
        }
        await admin.destroy();
    
        return { message: 'Administrador deletado com sucesso' };
    }
 }


module.exports = new DeleteAdminService();

