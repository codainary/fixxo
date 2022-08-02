const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class ElementServices {

  constructor() { }

  async create(data) {
    const element = models.Element.create(data);
    return element;
  }

  async find() {
    const elements = await models.Element.findAll();
    return elements;
  }

  async findOne(id) {
    const element = await models.Element.findByPk(id);
    if (!element) {
      throw boom.notFound('maintenance not found');
    }
    return element;
  }

  async update(id, changes) {
    const element = await this.findOne(id);
    const rta = await element.update(changes);
    return rta;
  }

  async delete(id) {
    const element = await this.findOne(id);
    await element.destroy();
    return { id };
  }


}

module.exports = ElementServices;
