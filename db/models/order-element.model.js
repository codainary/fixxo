const { Model, DataTypes, Sequelize } = require('sequelize');

const { ORDER_TABLE } = require('./order.model');
const { ELEMENT_TABLE } = require('./element.model');

const ORDER_ELEMENT_TABLE = 'orders_elements';

const OrderElementSchema =  {
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
}

class OrderElement extends Model {

  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_ELEMENT_TABLE,
      modelName: 'OrderElement',
      timestamps: false
    }
  }
}

module.exports = { OrderElement, OrderElementSchema, ORDER_ELEMENT_TABLE };
