const jwt = require('jsonwebtoken');

function generateToken(payload) {
  const token = jwt.sign(
    {
      id: payload.id,
      email: payload.email,
      role: payload.role,
    },
    process.env.JWT_SECRET, // Chave secreta do JWT
    {
      expiresIn: '1d', // Expiração do token (1 dia)
    }
  );

  return token;
}
module.exports = generateToken;