const bcrypt = require('bcryptjs');
const { Usuario } = require('../../../database/models');
const AppError = require('../../../shared/errors/AppError');
const {USUARIO_EMAIL_DUPLICADO} = require('../../../shared/constants/ErroCodes');


class CreateUsuarioService {
    async execute({ nome, email, senha, role }) {
            
        const usuarioExistente = await Usuario.findOne({ where: { email } });
        if (usuarioExistente) {
            throw new AppError(
                USUARIO_EMAIL_DUPLICADO.message,
                USUARIO_EMAIL_DUPLICADO.statusCode,
                USUARIO_EMAIL_DUPLICADO.details,
                USUARIO_EMAIL_DUPLICADO.code
            );
        }
         
        const senhaCriptografada = await bcrypt.hash(senha, 8);

        const novoUsuario = await Usuario.create({
            nome,
            email,
            senha: senhaCriptografada,
            role
        });

        return {
            id: novoUsuario.id,
            nome: novoUsuario.nome,
            email: novoUsuario.email,
            role: novoUsuario.role
        };
    }
}

module.exports = new CreateUsuarioService();