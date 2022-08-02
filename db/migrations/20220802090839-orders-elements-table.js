'use strict';

const { OrderElementSchema, ORDER_ELEMENT_TABLE } = require('./../models/order-element.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ORDER_ELEMENT_TABLE, OrderElementSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDER_ELEMENT_TABLE);
  }
};
