const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class OfficialServices {

  constructor() { }

  async create(data) {
    const newOfficial = await models.Official.create(data);
    return newOfficial;
  }

  async find() {
    const official = await models.Official.findAll();
    return official;
  }

  async findOne(id) {
    const official = await models.Official.findByPk(id, {
      include: ['user']
    });
    if (!official) {
      throw boom.notFound('official not found');
    }
    return { official };
  }

  async update(id, changes) {
    return {
      id,
      changes
    };
  }

  async delete(id) {
    return { id };
  }


}

module.exports = OfficialServices;
