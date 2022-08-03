'use strict';

const { MAINTENANCE_TABLE } = require('./../models/maintenance.model');
const { PQR_TABLE } = require('./../models/pqr.model');
const { DataTypes, Sequelize } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(MAINTENANCE_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING
      },
      descripcion: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      },
      pqrId: {
        field: 'pqr_id',
        allowNull: true,
        type: DataTypes.INTEGER,
        unique: true,
        references: {
          model: PQR_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(MAINTENANCE_TABLE);
  }
};
