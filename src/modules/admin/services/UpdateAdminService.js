const { Admin } = require('../../../database/models');
const AppError = require('../../../shared/errors/AppError');
const bcrypt = require('bcryptjs');
const ADMIN_NAO_ENCONTRADO = require('../../../shared/constants/ErroCodes').ADMIN_NAO_ENCONTRADO;
class UpdateAdminService {
  async execute(id, { nome, email, senha, role }) {
    const admin = await Admin.findByPk(id);

    if (!admin) {
       throw new AppError(
    ADMIN_NAO_ENCONTRADO.message,
    ADMIN_NAO_ENCONTRADO.statusCode,
    ADMIN_NAO_ENCONTRADO.details,
     ADMIN_NAO_ENCONTRADO.code
       )
     }

    // Atualizações
    admin.nome = nome || admin.nome;
    admin.email = email || admin.email;
    admin.role = role || admin.role;

    if (senha) {
      admin.senha = await bcrypt.hash(senha, 8);
    }

    await admin.save();

    return {
      id: admin.id,
      nome: admin.nome,
      email: admin.email,
      role: admin.role
    };
  }
}

module.exports = new UpdateAdminService();
