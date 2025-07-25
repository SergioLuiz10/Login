const AppError = require('../../../shared/errors/AppError');
const {Admin} = require('../../../database/models');
const ADMIN_LISTAGEM_FALHOU = require('../../../shared/constants/ErroCodes').ADMIN_LISTAGEM_FALHOU;

class ListAdminService {
  async execute() {
    try {
      const admins = await Admin.findAll({
        attributes: ['id', 'nome', 'email', 'role', 'createdAt', 'updatedAt']
      });
      return admins;
    } catch (error) {
     throw new AppError(
    ADMIN_LISTAGEM_FALHOU.message,
    ADMIN_LISTAGEM_FALHOU.statusCode,
    ADMIN_LISTAGEM_FALHOU.details,
     ADMIN_LISTAGEM_FALHOU.code
       )
    }
  }
}

module.exports = new ListAdminService();