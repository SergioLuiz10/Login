const AppError = require('../../../shared/errors/AppError');
const { Usuario } = require('../../../database/models');
const { USUARIO_NAO_ENCONTRADO } = require('../../../shared/constants/ErroCodes');

class ListarUsuarioIdService {
    async execute(id) {
    const usuario = await Usuario.findByPk(id, {
      attributes: ['id', 'nome', 'email', 'role'],
    });


        if (!usuario) {
             throw new AppError(
    USUARIO_NAO_ENCONTRADO.message,
    USUARIO_NAO_ENCONTRADO.statusCode,
    USUARIO_NAO_ENCONTRADO.details,
    USUARIO_NAO_ENCONTRADO.code
  );
        }

        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            role: usuario.role
        };
    }
}

module.exports = new ListarUsuarioIdService();