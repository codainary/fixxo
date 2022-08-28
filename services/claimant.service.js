const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class ClaimantServices {

  constructor() { }

  async create(data) {
    const claimant = models.Claimant.create(data);
    return claimant;
  }

  async find() {
    const claimants = await models.Claimant.findAll();
    return claimants;
  }

  async findOne(id) {
    const claimant = await models.Claimant.findByPk(id);
    if (!claimant) {
      throw boom.notFound('claimant not found');
    }
    return claimant;
  }

  async update(id, changes) {
    const claimant = await this.findOne(id);
    const rta = await claimant.update(changes);
    return rta;
  }

  async delete(id) {
    const claimant = await this.findOne(id);
    await claimant.destroy();
    return { id };
  }


}

module.exports = ClaimantServices;
