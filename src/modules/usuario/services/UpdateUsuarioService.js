const { Usuario } = require('../../../database/models');
const AppError = require('../../../shared/errors/AppError');
const bcrypt = require('bcryptjs');
const {USUARIO_NAO_ENCONTRADO,USUARIO_EMAIL_DUPLICADO} = require('../../../shared/errors/ErrorCodes');
class UpdateUsuarioService {
  async execute(id, { nome, email, senha, role }) {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
         throw new AppError(
    USUARIO_NAO_ENCONTRADO.message,
    USUARIO_NAO_ENCONTRADO.statusCode,
    USUARIO_NAO_ENCONTRADO.details,
     USUARIO_NAO_ENCONTRADO.code
       );
    }

    if (email && email !== usuario.email) {
      const usuarioExistente = await Usuario.findOne({ where: { email } });
      if (usuarioExistente) {
         throw new AppError(
    USUARIO_EMAIL_DUPLICADO.message,
    USUARIO_EMAIL_DUPLICADO.statusCode,
    USUARIO_EMAIL_DUPLICADO.details,
     USUARIO_EMAIL_DUPLICADO.code
       );;
      }
    }

    let senhaCriptografada = usuario.senha;
    if (senha) {
      senhaCriptografada = await bcrypt.hash(senha, 8);
    }

    usuario.nome = nome || usuario.nome;
    usuario.email = email || usuario.email;
    usuario.senha = senhaCriptografada;
    usuario.role = role || usuario.role;

    await usuario.save();

    return {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      role: usuario.role
    };
  }
}

module.exports = new UpdateUsuarioService();
