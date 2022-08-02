'use strict';

const { PqrSchema, PQR_TABLE } = require('./../models/pqr.model');
//const { UserSchema, USER_TABLE } = require('./../models/user.model');

module.exports = {
  async up(queryInterface) {
    //await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.removeColumn(PQR_TABLE, 'userId', PqrSchema.userId);
    await queryInterface.addColumn(PQR_TABLE, 'user_id', PqrSchema.userId);
  },

  async down(queryInterface) {
    //await queryInterface.dropTable(USER_TABLE);
    await queryInterface.removeColumn(PQR_TABLE, 'user_id', PqrSchema.userId);
  }
};
