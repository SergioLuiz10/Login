const CreateAdminService = require('../services/CreateAdminService');
const ListAdminService = require('../services/ListAdminService');
const ListAdminIdService = require('../services/ListAdminIdService');
const UpdateAdminService = require('../services/UpdateAdminService');
const DeleteAdminService = require('../services/DeleteAdminService');
const createAdminSchema = require('../validations/CreateAdminSchema');
const UpdateAdminSchema = require('../validations/UpdateAdminSchema');
const LoginAdminService = require('../services/LoginAdminService');
module.exports = {
  async createAdmin(req, res,next) {
    try {

      await createAdminSchema.validate(req.body, { abortEarly: false });
      const { nome, email, senha, role } = req.body;

      const admin = await CreateAdminService.execute({ nome, email, senha, role });

      return res.status(201).json(admin);
    } catch (err) {

          next(err); // Isso aqui passa o erro pro middleware errorHandler
    } 
  },
  async listAdmins(req, res, next) {
    try {
      const admins = await ListAdminService.execute();
      return res.status(200).json(admins);
    } catch (err) {
      next(err); // Passa o erro para o middleware de tratamento de erros
    }
  },
  async listAdminById(req, res, next) {
    try { 
      const { id } = req.params;
      const admin = await ListAdminIdService.execute(id);
      return res.status(200).json(admin);
    } catch (err) {
      next(err); // Passa o erro para o middleware de tratamento de erros
    }
  },
  async updateAdmin(req, res, next) {
    try {
      await UpdateAdminSchema.validate(req.body, { abortEarly: false });
      // Valida os dados de entrada com o schema de validação
      const { id } = req.params;
      const { nome, email, senha, role } = req.body;

      const adminAtualizado = await UpdateAdminService.execute(id, { nome, email, senha, role });

      return res.status(200).json(adminAtualizado);
    } catch (err) {
    
      next(err); // Passa o erro para o middleware de tratamento de erros
    }
  },
  async deleteAdmin(req, res, next) {
    try {
      const { id } = req.params;

      await DeleteAdminService.execute(id);

      return res.status(204).send(); // Retorna 204 No Content
    } catch (err) {
      next(err); // Passa o erro para o middleware de tratamento de erros
    }
  },
 async loginAdmin(req, res, next) {
  try {
    const { email, senha } = req.body;

    const usuario = await LoginAdminService.execute({ email, senha });

    return res.status(200).json({ message: 'Login realizado com sucesso', usuario });
  } catch (err) {
    next(err);
  }
 }
};
