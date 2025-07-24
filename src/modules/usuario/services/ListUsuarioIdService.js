const AppError = require('../../../shared/errors/AppError');
const { Usuario } = require('../../../database/models');


class ListarUsuarioIdService {
    async execute(id) {
    const usuario = await Usuario.findByPk(id, {
      attributes: ['id', 'nome', 'email', 'role'],
    });


        if (!usuario) {
            throw new AppError('Usuário não encontrado',404);
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