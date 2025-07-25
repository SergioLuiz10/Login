'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('usuarios', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    });

    await queryInterface.changeColumn('usuarios', 'nome', {
      type: Sequelize.STRING,
      allowNull: false
    });

    await queryInterface.changeColumn('usuarios', 'senha', {
      type: Sequelize.STRING,
      allowNull: false
    });

    await queryInterface.changeColumn('usuarios', 'role', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('usuarios', 'email', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false
    });

    await queryInterface.changeColumn('usuarios', 'nome', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.changeColumn('usuarios', 'senha', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.changeColumn('usuarios', 'role', {
      type: Sequelize.STRING,
      allowNull: true
    });
  }
};
