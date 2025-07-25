const yup = require('yup');

const UpdateAdminSchema = yup.object().shape({
    nome: yup.string().optional(),
    email: yup.string().email('Email inválido').optional(),
    senha: yup.string().min(6, 'Senha deve ter pelo menos 6 caracteres').optional(),
    role: yup.string().oneOf(['admin', 'user'], 'Role deve ser "admin" ou "user"').optional(),
});
module.exports = UpdateAdminSchema;