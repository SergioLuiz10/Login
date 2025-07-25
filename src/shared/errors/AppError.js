

class AppErrors extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.details = details; // informações extras (ex: campos inválidos)
    this.code = code; // código interno opcional (ex: ADM_001)
    this.name = 'AppError';
  }
}
module.exports = AppErrors;
