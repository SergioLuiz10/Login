const CreateAdminService = require('../services/CreateAdminService');
const ListAdminService = require('../services/ListAdminService');
const ListAdminIdService = require('../services/ListAdminIdService');
const UpdateAdminService = require('../services/UpdateAdminService');


module.exports = {
  async createAdmin(req, res) {
    try {
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
  }
};
