module.exports = {
  // Usuário
  USUARIO_EMAIL_DUPLICADO: {
    message: 'Email já cadastrado',
    statusCode: 409,
    details: { campo: 'email', motivo: 'duplicado' },
    code: 'USR_409_EMAIL_DUPLICADO'
  },
  USUARIO_NAO_ENCONTRADO: {
    message: 'Usuário não encontrado',
    statusCode: 404,
    details: { entidade: 'usuario' },
    code: 'USR_404_NOT_FOUND'
  },
  USUARIO_SENHA_INVALIDA: {
    message: 'Senha incorreta',
    statusCode: 401,
    details: { campo: 'senha' },
    code: 'USR_401_INVALID_PASSWORD'
  },
USURIO_LISTAGEM_FALHOU: {
  message: 'Erro ao listar usuarios',
  statusCode: 500,
  details: { operação: 'listar_usuarios' },
  code: 'ADM_500_LIST_ERROR'
},
  // Admin
  ADMIN_EMAIL_DUPLICADO: {
    message: 'Email de admin já cadastrado',
    statusCode: 409,
    details: { campo: 'email' },
    code: 'ADM_409_EMAIL_DUPLICADO'
  },
  ADMIN_NAO_ENCONTRADO: {
    message: 'Administrador não encontrado',
    statusCode: 404,
    details: { entidade: 'admin' },
    code: 'ADM_404_NOT_FOUND'
  },
  ADMIN_SENHA_INVALIDA: {
  message: 'Senha de administrador incorreta',
  statusCode: 401,
  details: { campo: 'senha' },
  code: 'ADM_401_INVALID_PASSWORD'
},
ADMIN_LISTAGEM_FALHOU: {
  message: 'Erro ao listar administradores',
  statusCode: 500,
  details: { operação: 'listar_admins' },
  code: 'ADM_500_LIST_ERROR'
},
  // Autenticação
  TOKEN_INVALIDO: {
    message: 'Token inválido ou expirado',
    statusCode: 401,
    code: 'AUTH_401_INVALID_TOKEN'
  }
};
