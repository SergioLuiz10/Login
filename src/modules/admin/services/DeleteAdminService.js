const {Admin} = require('../../database/models');
const AppError = require('../../../shared/errors/AppError');

class DeleteAdminService {
    async execute(id) {
        const admin = await Admin.findByPk(id);
    
        if (!admin) {
        throw new AppError('Administrador não encontrado', 204);
        }
    
        await admin.destroy();
    
        return { message: 'Administrador deletado com sucesso' };
    }
}
module.exports = new DeleteAdminService();

