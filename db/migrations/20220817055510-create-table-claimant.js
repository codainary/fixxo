'use strict';

const { CLAIMANT_TABLE } = require('./../models/claimant.model');
const { USER_TABLE } = require('./../models/user.model');

const { DataTypes, Sequelize } = require('sequelize');

module.exports = {
  async up(queryInterface) {

    await queryInterface.createTable(CLAIMANT_TABLE, {
      // fields here!
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      claimant_id: {
        unique: true,
        allowNull: false,
        field: 'claimant_id',
        type: DataTypes.STRING
      },
      firstName: {
        allowNull: false,
        field: 'first_name',
        type: DataTypes.STRING
      },
      lastName: {
        allowNull: false,
        field: 'last_name',
        type: DataTypes.STRING
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      address: {
        allowNull: true,
        type: DataTypes.TEXT
      },
      userId: {
        field: 'user_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true, /* not used for One to Many associations */
        references: {
          model: USER_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      deleted: {
        allowNull: true,
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

    await queryInterface.dropTable(CLAIMANT_TABLE);

  }
};
