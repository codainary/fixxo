const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class UserServices {

  constructor() { }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const users = await models.User.findAll();
    return users;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id, { include: 'pqrs' });
    if (!user) {
      throw boom.notFound('user not found');
    }
    return { user };
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

module.exports = UserServices;
