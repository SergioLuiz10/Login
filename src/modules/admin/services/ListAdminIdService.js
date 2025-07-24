const {Admin} = require('../../../database/models');
const AppError = require('../../../shared/errors/AppError');


class ListAdminIdService {
  async execute(id) {
    const admin = await Admin.findByPk(id, {
      attributes: ['id', 'nome', 'email', 'role'],
    });

    if (!admin) {
      throw new AppError('Administrador não encontrado', 404);
    }

     return admin;
  }
}
module.exports = new ListAdminIdService();