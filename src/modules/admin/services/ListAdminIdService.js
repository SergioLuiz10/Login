const {Admin} = require('../../../database/models');
const AppError = require('../../../shared/errors/AppError');
const ADMIN_LISTAGEM_FALHOU = require('../../../shared/constants/ErroCodes').ADMIN_LISTAGEM_FALHOU;

class ListAdminIdService {
  async execute(id) {
    const admin = await Admin.findByPk(id, {
      attributes: ['id', 'nome', 'email', 'role'],
    });

    if (!admin) {
      throw new AppError(
        ADMIN_LISTAGEM_FALHOU.message,
        ADMIN_LISTAGEM_FALHOU.statusCode,
        ADMIN_LISTAGEM_FALHOU.details,
        ADMIN_LISTAGEM_FALHOU.code
      );
    }

     return admin;
  }
}
module.exports = new ListAdminIdService();