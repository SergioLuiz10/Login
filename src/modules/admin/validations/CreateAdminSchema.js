const yup = require('yup');

const createAdminSchema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    senha: yup.string().min(6, 'Senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
    role: yup.string().oneOf(['admin', 'user'], 'Role deve ser "admin" ou "user"').required('Role é obrigatória'),
});

module.exports = createAdminSchema;