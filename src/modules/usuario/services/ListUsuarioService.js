const { Usuario } = require('../../../database/models');


class ListarUsuarioService {
    async execute() {
        const usuarios = await Usuario.findAll({
            attributes: [ 'nome', 'email', 'role'],    
            order: [['createdAt', 'DESC']]
        });


        return usuarios.map(usuario => ({
            nome: usuario.nome,
            email: usuario.email,
            role: usuario.role
        })); 
    }        
}
module.exports = new ListarUsuarioService();    