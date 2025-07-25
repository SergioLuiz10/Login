const bcrypt = require('bcryptjs');
const { Usuario } = require('../../../database/models');
const AppError = require('../../../shared/errors/AppError');
const {
  USUARIO_NAO_ENCONTRADO,
  USUARIO_SENHA_INVALIDA
} = require('../../../shared/constants/ErroCodes');
const generateToken = require('../../../shared/utils/generateToken');

class LoginUsuarioService {
  async execute({ email, senha }) {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      throw new AppError(
        USUARIO_NAO_ENCONTRADO.message,
        USUARIO_NAO_ENCONTRADO.statusCode,
        USUARIO_NAO_ENCONTRADO.details,
        USUARIO_NAO_ENCONTRADO.code
      );
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      throw new AppError(
        USUARIO_SENHA_INVALIDA.message,
        USUARIO_SENHA_INVALIDA.statusCode,
        USUARIO_SENHA_INVALIDA.details,
        USUARIO_SENHA_INVALIDA.code
      );
    }
    const token = generateToken(usuario);
    return {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      role: usuario.role,
      token: token, // Retorna o token JWT gerado
    };
  }
}

module.exports = new LoginUsuarioService();
