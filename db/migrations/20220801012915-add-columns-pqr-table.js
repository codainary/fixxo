'use strict';

const { PqrSchema, PQR_TABLE } = require('./../models/pqr.model');

module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(PQR_TABLE, 'subject', PqrSchema.subject);
    await queryInterface.addColumn(PQR_TABLE, 'context', PqrSchema.context);
    await queryInterface.addColumn(PQR_TABLE, 'deleted', PqrSchema.deleted);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(PQR_TABLE, 'subject', PqrSchema.subject);
    await queryInterface.removeColumn(PQR_TABLE, 'context', PqrSchema.context);
    await queryInterface.removeColumn(PQR_TABLE, 'deleted', PqrSchema.deleted);
  }
};
