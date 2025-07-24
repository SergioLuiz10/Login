const bcrypt  = require('bcryptjs');
const { Admin } = require('../../../database/models');
const AppError = require('../../../shared/errors/AppError');



    class CreateAdminService {
        async execute({ nome, email, senha, role }) {
            const adminExistente = await Admin.findOne({ where: { email } });
            if (adminExistente) {       
                throw new AppError('Email já cadastrado',409);
       
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