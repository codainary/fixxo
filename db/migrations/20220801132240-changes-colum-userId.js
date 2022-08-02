'use strict';

const { PqrSchema, PQR_TABLE } = require('./../models/pqr.model');
//const { UserSchema, USER_TABLE } = require('./../models/user.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(PQR_TABLE, 'user_id', PqrSchema.userId);
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(PQR_TABLE, 'user_id', PqrSchema.userId);
  }
};
