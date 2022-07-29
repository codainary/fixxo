const faker = require('faker');
const boom = require('@hapi/boom');

class pqrServices {

  constructor() {
    this.pqrs = [];
    this.generate();
  }

  generate() {
    const limit = 100
    for (let index = 0; index < limit; index++) {
      this.pqrs.push({
        //id: faker.random.uuid(),
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        deleted: faker.datatype.boolean()

      })
    }
  }

  async create(data) {
    const newPqr = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.pqrs.push(newPqr);
    return newPqr;
  }

  async find() {
    return this.pqrs;
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
