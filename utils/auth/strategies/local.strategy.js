const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserServices = require('../../../services/user.service');
const service = new UserServices();

const localStrategy = new Strategy({
  // if we need perfomance login credencial
  //usernameField: 'email',
  //passwordField: 'password',
},
  async (username, password, done) => {
    try {
      const user = await service.findByUsername(username);
      if (!user) {
        done(boom.unauthorized(), false);
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        done(boom.unauthorized(), false);
      }
      delete user.dataValues.password;
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = localStrategy;