'use strict';

const { USER_TABLE } = require('./../models/user.model');
const { PQR_TABLE } = require('./../models/pqr.model');
const { DataTypes, Sequelize } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PQR_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      subject: {
        allowNull: true,
        type: DataTypes.STRING
      },
      context: {
        allowNull: true,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      deleted: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      },
      userId: {
        field: 'user_id',
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: USER_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(PQR_TABLE);
  }
};
