const { Model, DataTypes, Sequelize } = require('sequelize');

const PQR_TABLE = 'pqrs';

const PqrSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  requester: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Pqr extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PQR_TABLE,
      modelName: 'Pqr',
      timestamps: false
    }
  }
}

module.exports = { PQR_TABLE, PqrSchema, Pqr }
