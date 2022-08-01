'use strict';

const { PqrSchema, PQR_TABLE } = require('./../models/pqr.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(PQR_TABLE, 'requester', PqrSchema.deleted);
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(PQR_TABLE, 'deleted', PqrSchema.deleted);
  }
};
