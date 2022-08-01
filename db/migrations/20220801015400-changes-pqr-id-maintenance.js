'use strict';
const { DataTypes } = require('sequelize');
const { MAINTENANCE_TABLE } = require('./../models/maintenance.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.changeColumn(MAINTENANCE_TABLE, 'pqr_id', {
      field: 'pqr_id',
      allowNull: true,
      type: DataTypes.INTEGER,
      unique: true,
    });
  },

  async down(queryInterface) {
    //await queryInterface.dropTable(MAINTENANCE_TABLE);
    //await queryInterface.drop(MAINTENANCE_TABLE);
  }
};
