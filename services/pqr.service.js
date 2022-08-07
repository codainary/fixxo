const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { database } = require('faker/lib/locales/en');

const { models } = require('../libs/sequelize');

class pqrServices {

  constructor() { }

  async create(data) {
    const hash = await bcrypt.hash(data.user.password, 10);
    const newData = {
      ...data,
      user: {
        ...data.user,
        password: hash
      }
    }
    const newPqr = await models.Pqr.create(newData, {
      include: ['user']
    });
    delete newPqr.dataValues.user.dataValues.password;
    return newPqr;
  }

  async find(query) {
    const options = {
      include: ['maintenance'],
      where: {}
    }

    // pagination!
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    // filters!
    const { deleted } = query;
    if (deleted) {
      options.where.deleted = deleted;
    }

    const rta = await models.Pqr.findAll(options);
    return rta;
  }

  async findOne(id) {
    const pqr = await models.Pqr.findByPk(id);
    if (!pqr) {
      throw boom.notFound('pqr not found');
    }
    return pqr;
  }

  async findByUser(){
    // code here!
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
