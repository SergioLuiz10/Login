const AppError = require('../../../shared/errors/AppError');
const { Usuario } = require('../../../database/models');


class DeleteUsuarioService {
    async execute(id) {
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            throw new AppError('Usuário não encontrado', 204);
        }

        await usuario.destroy();

    }
}
module.exports = new DeleteUsuarioService();