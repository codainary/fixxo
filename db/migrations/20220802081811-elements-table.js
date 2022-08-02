'use strict';

const { ElementSchema, ELEMENT_TABLE } = require('./../models/element.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ELEMENT_TABLE, ElementSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ELEMENT_TABLE);
  }
};

