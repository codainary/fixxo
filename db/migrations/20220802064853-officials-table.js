'use strict';

const { OfficialSchema, OFFICIAL_TABLE } = require('./../models/official.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(OFFICIAL_TABLE, OfficialSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(OFFICIAL_TABLE);
  }
};
