const AppError = require('../../../shared/errors/AppError');
const CreateUsuarioService = require('../services/CreateUsuarioService');
const ListUsuarioService = require('../services/ListUsuarioService');
const ListarUsuarioIdService = require('../services/ListUsuarioIdService');
const UpdateUsuarioService = require('../services/UpdateUsuarioService');
const DeleteUsuarioService = require('../services/DeleteUsuarioService');


module.exports = {
  async CreateUsuario(req, res,next) {
   try {
      const { nome, email, senha, role } = req.body;
       

      const usuario = await CreateUsuarioService.execute({ nome, email, senha, role });

      return res.status(201).json(usuario);
    } catch (err) {
           next(err); // Isso aqui passa o erro pro middleware errorHandler
  }
   
  },
  async listUsuarios(req, res,next) {
    try {
      const usuarios = await ListUsuarioService.execute();
      return res.status(200).json(usuarios);
    } catch (err) {
      next(err); // Passa o erro para o middleware de tratamento de erros
    }
  },
  async listUsuarioId(req, res,next) {
    try {
      const { id } = req.params;
      const usuario = await ListarUsuarioIdService.execute(id);
      return res.status(200).json(usuario);
    } catch (err) {
      next(err); // Passa o erro para o middleware de tratamento de erros
    }
  },
  async updateUsuario(req, res, next) {
    try {
      const { id } = req.params;
      const { nome, email, senha, role } = req.body;

      const usuarioAtualizado = await UpdateUsuarioService.execute(id, { nome, email, senha, role });

      return res.status(200).json(usuarioAtualizado);
    } catch (err) {
      next(err); // Passa o erro para o middleware de tratamento de erros
    }
  },
   async deleteUsuario(req, res, next) {  
    try {
      const { id } = req.params;

      await DeleteUsuarioService.execute(id);

      return res.status(204).send(); // Retorna 204 No Content
    } catch (err) {
      next(err); // Passa o erro para o middleware de tratamento de erros
    }
  }
};