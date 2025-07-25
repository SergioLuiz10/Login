const { Admin } = require('../../../database/models');
const { ADMIN_NAO_ENCONTRADO, ADMIN_SENHA_INVALIDA } = require('../../../shared/constants/ErroCodes');
const AppError = require('../../../shared/errors/AppError');

class LoginAdminService {
  async execute({ email, senha }) {
    const admin = await Admin.findOne({ where: { email } });

      if (!admin) {
  throw new AppError(
    ADMIN_NAO_ENCONTRADO.message,
    ADMIN_NAO_ENCONTRADO.statusCode,
    ADMIN_NAO_ENCONTRADO.details,
    ADMIN_NAO_ENCONTRADO.code
  );
}
   

    const senhaValida = await bcrypt.compare(senha, admin.senha);

    if (!senhaValida) {
  throw new AppError(
    ADMIN_SENHA_INVALIDA.message,
    ADMIN_SENHA_INVALIDA.statusCode,
    ADMIN_SENHA_INVALIDA.details,
    ADMIN_SENHA_INVALIDA.code
  );
}
    return {
      id: admin.id,
      nome: admin.nome,
      email: admin.email,
      role: admin.role
    };
  }
}

module.exports = new LoginAdminService();