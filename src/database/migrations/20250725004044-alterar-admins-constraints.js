'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('admins', 'nome', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.changeColumn('admins', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });

    await queryInterface.changeColumn('admins', 'role', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('admins', 'nome', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.changeColumn('admins', 'email', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    });

    await queryInterface.changeColumn('admins', 'role', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  }
};
