'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme, Answer }) {
      this.belongsTo(Theme, { foreignKey: 'theme_id' });
      this.hasOne(Answer, { foreignKey: 'question_id' });
    }
  }
  Question.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      theme_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Themes',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      content: {
        type: DataTypes.TEXT,
      },
      img: {
        type: DataTypes.TEXT,
      },
      right_answer: {
        type: DataTypes.TEXT,
      },
      points: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
