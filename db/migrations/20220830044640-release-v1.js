'use strict';

const { DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('../models/user.model');
const { PQR_TABLE } = require('../models/pqr.model');

module.exports = {
  async up(queryInterface) {

    await queryInterface.createTable(USER_TABLE, {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      identification: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING(20)
      },
      firstName: {
        allowNull: false,
        field: 'first_name',
        type: DataTypes.STRING(20)
      },
      lastName: {
        allowNull: false,
        field: 'last_name',
        type: DataTypes.STRING(20)
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING(10)
      },
      email: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING(50)
      },
      username: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING(15)
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      address: {
        allowNull: true,
        type: DataTypes.TEXT
      },
      recoveryToken: {
        allowNull: true,
        field: 'recovery_token',
        type: DataTypes.STRING
      },
      verifyCode: {
        allowNull: true,
        field: 'verify_code',
        type: DataTypes.STRING(6)
      },
      active: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      role: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      deleted: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.NOW
      }

    });

    await queryInterface.createTable(PQR_TABLE, {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      subject: {
        allowNull: false,
        type: DataTypes.STRING(80)
      },
      context: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      issueAddress: {
        allowNull: true,
        field: 'issue_address',
        type: DataTypes.TEXT
      },
      status: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      type: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: USER_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      deleted: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.NOW
      }
    });

  },

  async down(queryInterface) {

    await queryInterface.dropTable(PQR_TABLE);
    await queryInterface.dropTable(USER_TABLE);

  }
};
