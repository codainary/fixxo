'use strict';

const { PqrSchema, PQR_TABLE } = require('./../models/pqr.model');

module.exports = {
  async up(queryInterface) {
    //await queryInterface.removeColumn(PQR_TABLE, 'user_id', PqrSchema.userId);
  },
  async down(queryInterface) {
    //await queryInterface.addColumn(PQR_TABLE, 'user_id', PqrSchema.userId);
  }
};
