const boom = require('@hapi/boom');

//const { models } = require('../libs/sequelize');
const { models } = require('./../libs/sequelize');

class UserServices {

  constructor() { }

  async create(data) {
    const newUser = await models.User.create(data);
    delete newUser.dataValues.password;
    return newUser;
  }

  async find() {
    const users = await models.User.findAll();
    return users;
  }

  async findByUsername(username) {
    const users = await models.User.findOne({
      where: { username }
    });
    return users;
  }

  async findByEmail(email) {
    const user = await models.User.findOne({
      where: { email }
    });
    return user;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    return { id };
  }


}

module.exports = UserServices;
