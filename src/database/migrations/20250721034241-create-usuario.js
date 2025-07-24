'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) { // This method will create the Usuarios table
    // This will create the Usuarios table with the specified columns
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      createdAt: { // This will add a createdAt column
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {   // This will add an updatedAt column
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {  // Revert the migration
    // This will drop the Usuarios table
    await queryInterface.dropTable('usuarios');
  }
};