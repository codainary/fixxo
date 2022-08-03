'use strict';

const { PqrSchema, PQR_TABLE } = require('./../models/pqr.model');

module.exports = {
  async up(queryInterface) {
    // await queryInterface.removeColumn(PQR_TABLE, 'requester', PqrSchema.requester);
    // await queryInterface.removeColumn(PQR_TABLE, 'description', PqrSchema.description);
    // await queryInterface.removeColumn(PQR_TABLE, 'deleted', PqrSchema.deleted);
  },

  async down(queryInterface) {
    // await queryInterface.addColumn(PQR_TABLE, 'requester', PqrSchema.requester);
    // await queryInterface.addColumn(PQR_TABLE, 'description', PqrSchema.description);
    // await queryInterface.addColumn(PQR_TABLE, 'deleted', PqrSchema.deleted);
  }
};
