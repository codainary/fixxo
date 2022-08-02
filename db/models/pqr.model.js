const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./user.model');

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
  },
  userId: {
    field: 'user_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    //unique: true, not used for One to Many associations
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
}

class Pqr extends Model {
  static associate(models) {
    // associate
    this.hasOne(models.Maintenance, {
      as: 'maintenance',
      foreignKey: 'pqrId'
    });
    this.belongsTo(models.User, { as: 'user' });
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
