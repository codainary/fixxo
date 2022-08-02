const { Model, DataTypes, Sequelize } = require('sequelize');

//const { CATEGORY_TABLE } = require('./category.model');

const ELEMENT_TABLE = 'elements';

const ElementSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  // price: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  // },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  measure: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  // categoryId: {
  //   field: 'category_id',
  //   allowNull: false,
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: CATEGORY_TABLE,
  //     key: 'id'
  //   },
  //   onUpdate: 'CASCADE',
  //   onDelete: 'SET NULL'
  // }
}


class Element extends Model {

  static associate(models) {
    //this.belongsTo(models.Category, { as: 'category' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ELEMENT_TABLE,
      modelName: 'Element',
      timestamps: false
    }
  }
}

module.exports = { Element, ElementSchema, ELEMENT_TABLE };
