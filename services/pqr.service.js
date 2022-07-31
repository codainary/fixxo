const faker = require('faker');
const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class pqrServices {

  constructor() { }

  async create(data) {
    const newPqr = await models.Pqr.create(data);
    return newPqr;
  }

  async find() {
    const rta = await models.Pqr.findAll();
    return rta;
  }

  async findOne(id) {
    const pqr = this.pqrs.find(item => item.id === id);
    if (!pqr) {
      throw boom.notFound('pqr not found');
    }
    if (pqr.deleted) {
      throw boom.conflict('pqr is deleted');
    }
    return pqr;
  }

  async update(id, changes) {
    const index = this.pqrs.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('pqr not found');
    }
    const pqr = this.pqrs[index];
    this.pqrs[index] = {
      ...pqr,
      ...changes
    };
    return this.pqrs[index];
  }

  async delete(id) {
    const index = this.pqrs.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('pqr not found');
    }
    this.pqrs.splice(index, 1);
    return { id }
  }


}

module.exports = pqrServices;
