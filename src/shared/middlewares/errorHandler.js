
const AppError = require('../errors/AppError');


function errorHandler(err, req, res, next) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  console.error(err); // Log the error for debugging

  return res.status(500).json({ error: 'Internal Server Error' });
}

module.exports = errorHandler;