'use strict';
// quando ✅ up: Insere os dados (joga o seed no ar)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'sergio',
        email: 'sergioluizteixeira12345@gmail.com',
        senha: 'filhodomenino',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'joao',
        email: 'sergioluizfreefire@gmail.com',
        senha: 'filhodomenino',
        role: 'aluno',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  // 🔄 down: Desfaz o que o up fez
// npx sequelize-cli db:seed:undo

  async down (queryInterface, Sequelize) {
 await queryInterface.bulkDelete('usuarios', null, {});
  },
};
