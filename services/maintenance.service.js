const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class maintenanceServices {

  constructor() { }

  async create(data) {
    const maintenance = models.Maintenance.create(data);
    return maintenance;
  }

  async find() {
    const rta = await models.Maintenance.findAll({
      include: [
        {
          association: 'pqr',
          include: 'user'
        }
      ]
    });
    return rta;
  }

  async findOne(id) {
    const maintenance = await models.Maintenance.findByPk(id);
    if (!maintenance) {
      throw boom.notFound('maintenance not found');
    }
    return maintenance;
  }

  async update(id, changes) {
    const maintenance = await this.findOne(id);
    const rta = await maintenance.update(changes);
    return rta;
  }

  async delete(id) {
    const maintenance = await this.findOne(id);
    await maintenance.destroy();
    return { id };
  }


}

module.exports = maintenanceServices;
