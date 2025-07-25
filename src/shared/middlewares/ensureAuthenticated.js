const jwt = require('jsonwebtoken');
const AppError = require('../errors/AppError');

function ensureAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization; // Verifica se o header Authorization está presente

  if (!authHeader || !authHeader.startsWith('Bearer ')) { // Verifica se o header está no formato correto
    throw new AppError('Token não fornecido', 401); // Retorna erro se o token não for fornecido ou estiver mal formatado
  }

  const token = authHeader.split(' ')[1]; // Extrai o token do header

try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica e decodifica o token usando a chave secreta do JWT

  // decoded vai conter: { id, email, role, iat, exp }
  req.user = {  // Adiciona as informações do usuário decodificadas ao objeto req.user
    id: decoded.id,
    email: decoded.email,
    role: decoded.role
  };

  return next(); // Chama o próximo middleware ou rota se a autenticação for bem-sucedida
} catch (err) {
  throw new AppError('Token inválido ou expirado', 401); // Retorna erro se o token for inválido ou expirado
}

}
module.exports = ensureAuthenticated;