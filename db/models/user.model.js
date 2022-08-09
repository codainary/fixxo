const { Model, DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  recoveryToken: {
    allowNull: true,
    field: 'recovery_token',
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'claimant'
  },
  deleted: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class User extends Model {
  static associate(models) {
    this.hasMany(models.Pqr, {
      as: 'pqrs',
      foreignKey: 'userId'
    });
    this.hasOne(models.Official, {
      as: 'official',
      foreignKey: 'userId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      timestamps: false,
      modelName: 'User',
      hooks: {
        beforeCreate: async (user, options) => {
          const password = await bcrypt.hash(user.password, 10);
          user.password = password;
        }
      }
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User }
