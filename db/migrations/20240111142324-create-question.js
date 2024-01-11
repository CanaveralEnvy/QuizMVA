'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      theme_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Themes',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      content: {
        type: Sequelize.TEXT,
      },
      img: {
        type: Sequelize.TEXT,
      },
      right_answer: {
        type: Sequelize.TEXT,
      },
      points: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  },
};
