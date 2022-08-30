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
    allowNull: false,
    type: DataTypes.STRING(80)
  },
  context: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  issueAddress: {
    allowNull: true,
    field: 'issue_address',
    type: DataTypes.TEXT
  },
  status: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  type: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  deleted: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW
  }

}

class Pqr extends Model {
  static associate(models) {
    // associate
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
