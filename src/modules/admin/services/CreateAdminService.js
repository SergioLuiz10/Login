const bcrypt  = require('bcryptjs');
const { Admin } = require('../../../database/models');
const AppError = require('../../../shared/errors/AppError');
const ADMIN_EMAIL_DUPLICADO = require('../../../shared/constants/ErroCodes').ADMIN_EMAIL_DUPLICADO;


    class CreateAdminService {
        async execute({ nome, email, senha, role }) {
            const adminExistente = await Admin.findOne({ where: { email } });
            if (adminExistente) {   
                throw new AppError(     
                 ADMIN_EMAIL_DUPLICADO.message,
                 ADMIN_EMAIL_DUPLICADO.statusCode,
                 ADMIN_EMAIL_DUPLICADO.details,
                 ADMIN_EMAIL_DUPLICADO.code
                )
            }
             const senhaCriptografada = await bcrypt.hash(senha, 8);
             
             const novoAdmin = await Admin.create({
                nome,
                email,
                senha: senhaCriptografada,
                role    
            });
            return {
                id: novoAdmin.id,
                nome: novoAdmin.nome,
                email: novoAdmin.email,
                role: novoAdmin.role
            };
        };

    }
    

  
 module.exports = new CreateAdminService();