const { Model, DataTypes, Sequelize } = require('sequelize');

//const { USER_TABLE } = require('./user.model');
const { CLAIMANT_TABLE } = require('./claimant.model');

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
    type: DataTypes.STRING
  },
  issueAddress: {
    allowNull: true,
    field: 'issue_address',
    type: DataTypes.TEXT(100) // ! Warning: PostgreSQL does not support TEXT with options. Plain `TEXT` will be used instead.
  },
  status: {
    allowNull: false,
    defaultValue: 0,
    type: DataTypes.SMALLINT
  },
  type: {
    allowNull: false,
    defaultValue: 0,
    type: DataTypes.SMALLINT
  },
  claimantId: {
    field: 'claimant_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CLAIMANT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  // email: {
  //   allowNull: false,
  //   type: DataTypes.STRING
  // },
  deleted: {
    allowNull: true,
    type: DataTypes.STRING,
    defaultValue: false
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW
  },
  // userId: {
  //   field: 'user_id',
  //   allowNull: true,
  //   type: DataTypes.INTEGER,
  //   //unique: true, not used for One to Many associations
  //   references: {
  //     model: USER_TABLE,
  //     key: 'id'
  //   },
  //   onUpdate: 'CASCADE',
  //   onDelete: 'SET NULL',
  // }
}

class Pqr extends Model {
  static associate(models) {
    // associate
    this.hasOne(models.Maintenance, {
      as: 'maintenance',
      foreignKey: 'pqrId'
    });
    this.belongsTo(models.Claimant, { as: 'claimant' });
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
