const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class pqrServices {

  constructor() { }

  async create(data) {
    const newPqr = await models.Pqr.create(data);
    return newPqr;
  }

  async find() {
    const rta = await models.Pqr.findAll({
      include: ['maintenance']
    });
    return rta;
  }

  async findOne(id) {
    const pqr = await models.Pqr.findByPk(id);
    if (!pqr) {
      throw boom.notFound('pqr not found');
    }
    return pqr;
  }

  async update(id, changes) {
    const pqr = await this.findOne(id);
    const rta = await pqr.update(changes);
    return rta;
  }

  async delete(id) {
    const pqr = await this.findOne(id);
    await pqr.destroy();
    return { id };
  }


}

module.exports = pqrServices;
