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
  identification: {
    unique: true,
    allowNull: false,
    type: DataTypes.STRING(20)
  },
  firstName: {
    allowNull: false,
    field: 'first_name',
    type: DataTypes.STRING(20)
  },
  lastName: {
    allowNull: false,
    field: 'last_name',
    type: DataTypes.STRING(20)
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING(10)
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING(50)
  },
  username: {
    unique: true,
    allowNull: false,
    type: DataTypes.STRING(15)
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  address: {
    allowNull: true,
    type: DataTypes.TEXT(100)
  },
  recoveryToken: {
    allowNull: true,
    field: 'recovery_token',
    type: DataTypes.STRING
  },
  verifyCode: {
    allowNull: true,
    field: 'verify_code',
    type: DataTypes.STRING(6)
  },
  active: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  role: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 0
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

class User extends Model {
  static associate(models) {
    this.hasOne(models.Pqr, {
      as: 'pqr',
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
