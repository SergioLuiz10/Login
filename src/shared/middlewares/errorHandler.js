const AppError = require('../errors/AppError');

function errorHandler(err, req, res, next) {
  // ⚠️ Yup validation error
  if (err.name === 'ValidationError') { // se for um erro de validação do Yup
    // Retorna 400 Bad Request com as mensagens de erro
    // Se for um erro de validação do Yup, retorna 400 Bad Request
    // e as mensagens de erro
    return res.status(400).json({
      status: 'validation_error',
      errors: err.errors, // array completo
    });
  }

  // ✅ Erro customizado controlado (ex: AppError lançado por você)
  if (err instanceof AppError) {// se for uma instância de AppError
    // Retorna o status e a mensagem do erro
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    details: err.details || null,
    code: err.code || null,
    });
  }

  // ❌ Erro inesperado (bug, exceção, etc)
  console.error(err); // para log em dev

  return res.status(500).json({
    status: 'error',
    message: 'Erro interno no servidor',
  });
}

module.exports = errorHandler;
