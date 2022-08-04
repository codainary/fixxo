const { Model, DataTypes, Sequelize } = require('sequelize');
const { OFFICIAL_TABLE } = require('./official.model');

const ORDER_TABLE = 'orders';

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  officialId: {
    field: 'official_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: OFFICIAL_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}


class Order extends Model {

  static associate(models) {
    this.belongsTo(models.Official, {
      as: 'official',
    });
    this.belongsToMany(models.Element, {
      as: 'elements',
      through: models.OrderElement,
      foreignKey: 'orderId',
      otherKey: 'elementId'
    });
    this.hasOne(models.Maintenance, {
      as: 'maintenance',
      foreignKey: 'orderId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false
    }
  }
}

module.exports = { Order, OrderSchema, ORDER_TABLE };
