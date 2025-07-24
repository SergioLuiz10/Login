'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('admins', [
      {
        nome: 'Admin Principal',
        email: 'admin@finex.com',
        role: 'superadmin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Admin Secundário',
        email: 'secundario@finex.com',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admins', null, {});
  }
};
