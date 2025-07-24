const { Usuario } = require('../../../database/models');
const AppError = require('../../../shared/errors/AppError');
const bcrypt = require('bcryptjs');

class UpdateUsuarioService {
  async execute(id, { nome, email, senha, role }) {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      throw new AppError('Usuário não encontrado', 404);
    }

    if (email && email !== usuario.email) {
      const usuarioExistente = await Usuario.findOne({ where: { email } });
      if (usuarioExistente) {
        throw new AppError('Email já cadastrado', 409);
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
