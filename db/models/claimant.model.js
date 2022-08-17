const { Model, DataTypes, Sequelize } = require('sequelize');
const CLAIMANT_TABLE = 'claimants';
const { USER_TABLE } = require('./user.model');

const ClaimantSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  claimant_id: {
    unique: true,
    allowNull: false,
    field: 'claimant_id',
    type: DataTypes.STRING
  },
  firstName: {
    allowNull: false,
    field: 'first_name',
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    field: 'last_name',
    type: DataTypes.STRING
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING
  },
  address: {
    allowNull: true,
    type: DataTypes.TEXT
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true, /* not used for One to Many associations */
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  deleted: {
    allowNull: true,
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

class Claimant extends Model {
  static associate(models) {
    // this.hasOne(models.Claimant, {
    //   as: 'claimant',
    //   foreignKey: 'claimantId'
    // });
    this.hasMany(models.Pqr, {
      as: 'claimant',
      foreignKey: 'claimantId'
    });
    this.belongsTo(models.User, { as: 'user' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: CLAIMANT_TABLE,
      modelName: 'Claimant',
      timestamps: false
    }
  }
}

module.exports = { CLAIMANT_TABLE, ClaimantSchema, Claimant }
