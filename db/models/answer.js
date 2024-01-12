'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate({ User, Question }) {
      // this.hasOne(Question, { foreignKey: 'question_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Answer.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      question_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Questions',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      is_right: {
        type: DataTypes.BOOLEAN,
      },
      user_answer: {
        type: DataTypes.TEXT,
        allowNull: false,
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
      modelName: 'Answer',
    }
  );
  return Answer;
};
