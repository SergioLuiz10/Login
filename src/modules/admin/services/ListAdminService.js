const AppError = require('../../../shared/errors/AppErro');
const {Admin} = require('../../../database/models');


class ListAdminService {
  async execute() {
    try {
      const admins = await Admin.findAll({
        attributes: ['id', 'nome', 'email', 'role', 'createdAt', 'updatedAt']
      });
      return admins;
    } catch (error) {
      throw new AppError("Erro ao listar administradores", 500);
    }
  }
}

module.exports = new ListAdminService();