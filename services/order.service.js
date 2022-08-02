const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class OrderService {

  constructor() {
  }

  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async find() {
    const orders = await models.Order.findAll({
      include: [
        {
          association: 'official',
        },
        'elements'
      ]
    });
    return orders;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'official',
          include: ['user']
        },
        'elements'
      ]
    });
    return order;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

  // ******************** | Service to add elements to an order | ********************

  async addElement(data) {
    const newElement = await models.OrderElement.create(data);
    return newElement;
  }

}

module.exports = OrderService;
