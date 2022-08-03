'use strict';

const { ORDER_ELEMENT_TABLE } = require('./../models/order-element.model');
const { ELEMENT_TABLE } = require('./../models/element.model');
const { ORDER_TABLE } = require('./../models/order.model');
const { DataTypes, Sequelize } = require('sequelize');


module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ORDER_ELEMENT_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
      amount: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      orderId: {
        field: 'order_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: ORDER_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      elementId: {
        field: 'element_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: ELEMENT_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDER_ELEMENT_TABLE);
  }
};
