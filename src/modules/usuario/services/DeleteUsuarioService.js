const AppError = require('../../../shared/errors/AppError');
const { Usuario } = require('../../../database/models');
const { USUARIO_NAO_ENCONTRADO } = require('../../../shared/constants/ErroCodes');

class DeleteUsuarioService {
    async execute(id) {
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            throw new AppError(
            USUARIO_NAO_ENCONTRADO.message,
            USUARIO_NAO_ENCONTRADO.statusCode,  
            USUARIO_NAO_ENCONTRADO.details,
            USUARIO_NAO_ENCONTRADO.code) ;
        }

        await usuario.destroy();

    }
}
module.exports = new DeleteUsuarioService();