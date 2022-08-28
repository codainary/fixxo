const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('../libs/sequelize');

const UserServices = require('./user.service');
const service = new UserServices();

class pqrServices {

  constructor() { }

  async create(data) {

    // vlaidar si el clamian no existe
    if (!none) {
      // validate if user exist
      const user = await service.findByUsername(data.username);
      if (!user) {
        //throw boom.notFound('user not found');
        const newPqr = await models.Pqr.create({
          subject: data.subject,
          context: data.context,
          issueAddress: data.issueAddress,
          type: data.type,
          claimant: {
            claimant_id: data.claimant_id,
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            email: data.email,
            address: data.address,
            user: [{
              email: data.email,
              username: data.username,
              password: data.password
            }]
          }
        }, {
          include: [{
            association: 'claimant',
            include: ['user']
          }]
        });
        return newPqr;
      }else{

        // code here
      }
    }else{
      // crear pqr con los id de los usuario y claiman
      return newPqr;
    }

  }

  async find(query) {
    /* Fetch all models associated with User */
    /* User.findAll({ include: { all: true } }); */
    /* Fetch all models associated with User and their nested associations (recursively) */
    /* User.findAll({ include: { all: true, nested: true } }); */
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

  async findByUser() {
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

//{	"subject": "this is anothear pqr1",	"context": "No description",	"email": "gpereira@mail.com"}
