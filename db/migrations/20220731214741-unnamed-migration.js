'use strict';

const { MaintenanceSchema, MAINTENANCE_TABLE } = require('./../models/maintenance.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(MAINTENANCE_TABLE, MaintenanceSchema);
  },

  async down(queryInterface) {
    //await queryInterface.dropTable(MAINTENANCE_TABLE);
    await queryInterface.drop(MAINTENANCE_TABLE);
  }
};
