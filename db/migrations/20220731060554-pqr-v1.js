'use strict';

const { PqrSchema, PQR_TABLE } = require('./../models/pqr.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PQR_TABLE, PqrSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(PQR_TABLE);
  }
};
