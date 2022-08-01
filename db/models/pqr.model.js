const { Model, DataTypes, Sequelize } = require('sequelize');

const PQR_TABLE = 'pqrs';

const PqrSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  subject: {
    allowNull: true,
    type: DataTypes.STRING
  },
  context: {
    allowNull: true,
    type: DataTypes.TEXT
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING
  },
  deleted: {
    allowNull: true,
    type: DataTypes.TEXT,
    defaultValue: false
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class Pqr extends Model {
  static associate(models) {
    // associate
    this.hasOne(models.Maintenance, {
      as: 'maintenance',
      foreignKey: 'pqrId'
    });
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
